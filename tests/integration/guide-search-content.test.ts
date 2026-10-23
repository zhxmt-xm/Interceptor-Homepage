import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { createServer, type ViteDevServer } from 'vite';
import { GUIDE_CHAPTERS, type GuidePageId } from '../../src/content/guidebook';
import type { Locale } from '../../src/content/types';

// DOM snapshots compete with the complete-result rendering measured below.
test.use({ trace: 'off' });

interface SearchEntry {
  kind: 'chapter' | 'section' | 'step';
  anchor: string;
  title: string;
  text: string;
  step?: number;
}

interface SearchResult {
  href: string;
  chapter: string;
  title: string;
  excerpt: string;
  kind: SearchEntry['kind'];
  step?: number;
}

let server: ViteDevServer;
let cache: string;
let reader: {
  readGuideDocument: (
    page: GuidePageId,
    locale: Locale,
  ) => { title: string; html: string; search: SearchEntry[] };
  searchGuide: (query: string, locale: Locale) => SearchResult[];
};

test.beforeAll(async () => {
  cache = await mkdtemp(path.join(os.tmpdir(), 'interceptor-guide-search-'));
  server = await createServer({
    root: process.cwd(),
    cacheDir: cache,
    logLevel: 'error',
    server: { middlewareMode: true },
  });
  const module = await server.ssrLoadModule('/src/features/guide/utils.ts');
  reader = {
    readGuideDocument: module.readGuideDocument,
    searchGuide: module.searchGuide,
  };
});

test.afterAll(async () => {
  await server?.close();
  if (cache) await rm(cache, { recursive: true, force: true });
});

test('compiled guide exposes real section and numbered-step search content', () => {
  expect(reader.readGuideDocument('settings', 'zh').search).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: 'section',
        anchor: 'https-decryption',
        title: '准备 CA 并启用 HTTPS 解密',
      }),
      expect.objectContaining({
        kind: 'step',
        step: 1,
        text: expect.stringContaining('公开指纹、有效期、Generated 和 Trusted'),
        anchor: expect.stringMatching(/^search-step-/),
      }),
    ]),
  );
  expect(reader.readGuideDocument('capture', 'zh').search).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: 'section',
        anchor: '区分原始内容与规则修改结果',
        title: '区分原始内容与规则修改结果',
      }),
    ]),
  );
});

test('both complete books have unique real search anchors without media or markup', () => {
  for (const locale of ['zh', 'en'] as const) {
    for (const page of ['overview', ...GUIDE_CHAPTERS.map((chapter) => chapter.slug)] as const) {
      const document = reader.readGuideDocument(page, locale);
      expect(document.search).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ kind: 'chapter', title: document.title, anchor: '' }),
        ]),
      );
      expect(document.search.some((entry) => entry.kind === 'section')).toBe(true);
      const anchors = document.search.map((entry) => entry.anchor);
      expect(new Set(anchors).size, `${locale}/${page}`).toBe(anchors.length);
      for (const entry of document.search) {
        expect(entry.text).not.toMatch(/<img|<a\s|!\[|\/media\/v0\.1\.1|data-automation-id/);
        expect(entry.title.trim()).not.toBe('');
        if (!entry.anchor) continue;
        const anchor = entry.anchor.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
        expect(
          document.html.includes(`id="guide-anchor-${anchor}"`) ||
            document.html.includes(`id="guide-heading-${anchor}"`),
          `${locale}/${page}#${entry.anchor}`,
        ).toBe(true);
      }
    }
  }
});

test('title ranking, stable order and case-insensitive multi-term matching use actual text', () => {
  expect(reader.searchGuide).toEqual(expect.any(Function));
  const exact = reader.searchGuide('capture', 'en');
  expect(exact[0]).toMatchObject({ kind: 'chapter', href: '/en/guide/capture' });
  expect(reader.searchGuide('CAPTURE', 'en')).toEqual(exact);
  const results = reader.searchGuide('  public   fingerprint  Trusted ', 'en');
  expect(results).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: 'step',
        step: 1,
        href: expect.stringMatching(/^\/en\/guide\/settings#search-step-/),
      }),
    ]),
  );
  expect(reader.searchGuide('public fingerprint Trusted public', 'en')).toEqual(results);
  expect(reader.searchGuide('public fingerprint no-such-guide-phrase', 'en')).toEqual([]);
  expect(reader.searchGuide('public fingerprint Trusted', 'en')).toEqual(results);
});

test('numbered-step links remain valid when the reader changes language', () => {
  for (const chapter of GUIDE_CHAPTERS) {
    const chinese = reader.readGuideDocument(chapter.slug, 'zh');
    const english = reader.readGuideDocument(chapter.slug, 'en');
    const steps = (entries: readonly SearchEntry[]) =>
      entries
        .filter((entry) => entry.kind === 'step')
        .map((entry) => ({ anchor: entry.anchor, step: entry.step }))
        .sort((left, right) => left.anchor.localeCompare(right.anchor));
    expect(steps(english.search), chapter.slug).toEqual(steps(chinese.search));
  }
});

test('Chinese substrings find content across chapters without mixing languages', () => {
  const results = reader.searchGuide('证书', 'zh');
  expect(results.some((result) => result.href.startsWith('/guide/settings'))).toBe(true);
  expect(results.some((result) => result.href.startsWith('/guide/troubleshooting'))).toBe(true);
  expect(results.every((result) => !result.href.includes('lang=en'))).toBe(true);
  expect(reader.searchGuide('公开指纹 有效期', 'zh')).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: 'step',
        step: 1,
        href: expect.stringMatching(/^\/guide\/settings#search-step-/),
      }),
    ]),
  );
  expect(reader.searchGuide('公开指纹', 'en')).toEqual([]);
});

test('code and literal punctuation are searchable without interpreting regular expressions', () => {
  const results = reader.searchGuide('{"mode":"https-h1","secure":true}', 'en');
  expect(results).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        href: expect.stringMatching(/^\/en\/guide\/settings#search-step-/),
        excerpt: expect.stringContaining('{"mode":"https-h1","secure":true}'),
      }),
    ]),
  );
  expect(reader.searchGuide('recorded-after-resume', 'en')).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        step: 6,
        href: expect.stringMatching(/^\/en\/guide\/capture#search-step-/),
      }),
    ]),
  );
  expect(reader.searchGuide('[.*+?^${}()|\\\\]', 'en')).toEqual([]);
  expect(reader.searchGuide('<script>alert("search")</script>', 'zh')).toEqual([]);
  expect(reader.searchGuide(' \n\t ', 'zh')).toEqual([]);
});

test('section prose, table values and result snippets retain the correct destinations', () => {
  expect(reader.searchGuide('Uninstall 保留 CA', 'zh')).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: 'section',
        href: '/guide/settings#certificate-lifecycle',
      }),
    ]),
  );
  const results = reader.searchGuide('capture_get_exchange_body', 'en');
  expect(results.some((result) => result.href.startsWith('/en/guide/tool-reference#'))).toBe(true);
  for (const result of reader.searchGuide('HTTP', 'en')) {
    expect(result.excerpt.length).toBeLessThanOrEqual(202);
    expect(result.href).toMatch(/^\/en\/guide(?:\/[^?#]+)?(?:#.+)?$/);
  }
});

test.describe('search rendering performance', () => {
  test('each query paints its complete result set within the reader interaction budget', async ({
    page,
  }, testInfo) => {
    const measurements: Array<{
      locale: Locale;
      query: string;
      results: number;
      durationMs: number;
    }> = [];
    for (const locale of ['zh', 'en'] as const) {
      await page.goto(locale === 'en' ? '/en/guide' : '/guide');
      await expect(page.getByTestId('guide.article')).toBeVisible();
      await page.keyboard.press('Control+k');
      const input = page.getByTestId('guide.search.input');
      await expect(input).toBeFocused();
      for (const query of [
        locale === 'en' ? 'certificate' : '证书',
        'HTTP',
        'recorded-after-resume',
      ]) {
        const results = reader.searchGuide(query, locale).length;
        expect(results).toBeGreaterThan(0);
        await page.evaluate((expected) => {
          const root = document.documentElement;
          root.removeAttribute('data-search-duration');
          let started = 0;
          const observer = new MutationObserver(() => {
            if (
              !started ||
              document
                .querySelector('[data-automation-id="guide.search.count"]')
                ?.getAttribute('data-count') !== String(expected) ||
              document.querySelectorAll('[data-automation-id="guide.search.result"]').length !==
                expected
            )
              return;
            observer.disconnect();
            requestAnimationFrame(() =>
              requestAnimationFrame(() => {
                root.dataset.searchDuration = String(performance.now() - started);
              }),
            );
          });
          observer.observe(document.body, { subtree: true, childList: true, attributes: true });
          document.addEventListener(
            'input',
            () => {
              started = performance.now();
            },
            { capture: true, once: true },
          );
        }, results);
        await input.fill(query);
        await page.waitForFunction(() =>
          document.documentElement.hasAttribute('data-search-duration'),
        );
        const durationMs = Number(await page.locator('html').getAttribute('data-search-duration'));
        measurements.push({ locale, query, results, durationMs });
      }
    }
    await testInfo.attach('search-measurements', {
      body: Buffer.from(JSON.stringify(measurements, null, 2)),
      contentType: 'application/json',
    });
    expect(Math.max(...measurements.map((measurement) => measurement.durationMs))).toBeLessThan(
      300,
    );
  });
});
