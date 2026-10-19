import { readFileSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { toggleHeaderLanguage } from './header-controls';

// DOM snapshots compete with the measured render; retain timing JSON and failure screenshots.
test.use({ trace: 'off' });

test('opening the guide from home does not download a module for each media file', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  await expect(page.getByTestId('homepage.navigation.guide')).toBeVisible();
  const scripts: string[] = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'script') scripts.push(request.url());
  });
  await page.evaluate(() => {
    let started = 0;
    const observer = new MutationObserver(() => {
      if (!started || !document.querySelector('[data-automation-id="guide.article"]')) return;
      observer.disconnect();
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document.documentElement.dataset.guideEntryDuration = String(performance.now() - started);
        }),
      );
    });
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener(
      'click',
      () => {
        started = performance.now();
      },
      {
        once: true,
        capture: true,
      },
    );
  });
  await page.getByTestId('homepage.navigation.guide').click();
  await page.waitForFunction(() =>
    document.documentElement.hasAttribute('data-guide-entry-duration'),
  );
  const durationMs = Number(await page.locator('html').getAttribute('data-guide-entry-duration'));
  await testInfo.attach('guide-entry-measurement', {
    body: Buffer.from(JSON.stringify({ durationMs, scripts }, null, 2)),
    contentType: 'application/json',
  });
  expect(
    scripts.filter((url) => /\/guidebook\/media\/.+\.(png|webp)$/.test(new URL(url).pathname)),
  ).toEqual([]);
  expect(durationMs).toBeLessThan(1_000);
});

test('offscreen step images load lazily without changing their reserved dimensions', async ({
  page,
}) => {
  const requests: string[] = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'image') requests.push(request.url());
  });
  await page.goto('/guide/rules');
  const article = page.getByTestId('guide.article');
  await expect(article).toBeVisible();
  const images = article.locator('img');
  const image = images.last();
  expect(
    await image.evaluate((element) => element.getBoundingClientRect().top > innerHeight * 2),
  ).toBe(true);
  await expect(image).toHaveAttribute('loading', 'lazy');
  const source = await image.evaluate((element: HTMLImageElement) => element.src);
  expect(requests).not.toContain(source);
  const initialSize = await image.evaluate((element) => {
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  });
  await image.scrollIntoViewIfNeeded();
  await image.evaluate((element: HTMLImageElement) => element.decode());
  expect(
    await image.evaluate((element) => {
      const { width, height } = element.getBoundingClientRect();
      return { width, height };
    }),
  ).toEqual(initialSize);
  expect(requests).toContain(source);
});

test('ready reader switches unseen chapters without fetching code, text or styles again', async ({
  page,
}) => {
  await page.goto('/guide');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  const documentOrigin = await page.evaluate(() => performance.timeOrigin);
  const blockingRequests: string[] = [];
  await page.route('**/*', (route) => {
    if (
      ['script', 'stylesheet', 'fetch', 'xhr', 'document'].includes(route.request().resourceType())
    ) {
      blockingRequests.push(route.request().url());
      return route.abort('failed');
    }
    return route.continue();
  });
  for (const chapter of ['capture', 'rules', 'composer', 'settings']) {
    await page.getByTestId(`guide.chapter.${chapter}`).click();
    const expected = readFileSync(path.resolve(`guidebook/zh-CN/${chapter}.md`), 'utf8').match(
      /^# (.+)$/m,
    )?.[1];
    await expect(page.locator('h1')).toHaveText(expected ?? '');
    await expect(page.getByTestId('guide.article')).toBeVisible();
    await expect(page.locator('main[role="status"]')).toHaveCount(0);
  }
  await toggleHeaderLanguage(page);
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');
  await expect(page.locator('h1')).toHaveText(
    'Settings: proxies, certificates, storage and updates',
  );
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(documentOrigin);
  expect(blockingRequests).toEqual([]);
});

test('chapter and section navigation stay responsive and retain the reader shell', async ({
  page,
}, testInfo) => {
  test.setTimeout(60_000);
  await page.goto('/guide/capture');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  const shell = await page.getByTestId('guide.root').elementHandle();
  if (!shell) throw new Error('Reader shell is missing.');
  const measurements: Array<{ chapter: string; durationMs: number; shellRetained: boolean }> = [];

  for (const chapter of ['rules', 'composer', 'settings', 'capture', 'rules']) {
    const source = readFileSync(path.resolve(`guidebook/zh-CN/${chapter}.md`), 'utf8');
    const expectedTitle = source.match(/^# (.+)$/m)?.[1] ?? '';
    const expectedHeadings = [...source.matchAll(/^## /gm)].length;
    await page.evaluate(
      ({ expectedTitle, expectedHeadings }) => {
        const root = document.documentElement;
        root.removeAttribute('data-guide-navigation-duration');
        let started = 0;
        const observer = new MutationObserver(() => {
          if (
            !started ||
            document.querySelector('h1')?.textContent !== expectedTitle ||
            document.querySelectorAll('[data-automation-id="guide.article"] h2').length !==
              expectedHeadings
          )
            return;
          observer.disconnect();
          performance.mark('guide-commit');
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              performance.mark('guide-painted');
              root.dataset.guideNavigationDuration = String(performance.now() - started);
            }),
          );
        });
        document.addEventListener(
          'click',
          () => {
            started = performance.now();
            performance.mark('guide-click');
          },
          { once: true, capture: true },
        );
        observer.observe(document.body, { childList: true, subtree: true });
      },
      { expectedTitle, expectedHeadings },
    );
    await page.getByTestId(`guide.chapter.${chapter}`).click();
    // Pending locator assertions snapshot the full accessibility tree and distort long-page timings.
    await page.waitForFunction(() =>
      document.documentElement.hasAttribute('data-guide-navigation-duration'),
    );
    const durationMs = Number(
      await page.locator('html').getAttribute('data-guide-navigation-duration'),
    );
    const shellRetained = await shell.evaluate((node) => node.isConnected);
    measurements.push({ chapter, durationMs, shellRetained });
  }

  const outline = page.getByTestId('guide.outline').locator('a').nth(1);
  const article = await page.getByTestId('guide.article').elementHandle();
  if (!article) throw new Error('Reader article is missing.');
  const firstImage = page.getByTestId('guide.article').locator('img').first();
  await firstImage.scrollIntoViewIfNeeded();
  await firstImage.evaluate((element: HTMLImageElement) => element.decode());
  const image = await firstImage.elementHandle();
  if (!image) throw new Error('Reader step image is missing.');
  const source = await firstImage.getAttribute('src');
  await outline.click();
  expect(await article.evaluate((node) => node.isConnected)).toBe(true);
  expect(await image.evaluate((node) => node.isConnected)).toBe(true);
  expect(await firstImage.getAttribute('src')).toBe(source);
  await testInfo.attach('navigation-measurements', {
    body: Buffer.from(JSON.stringify(measurements, null, 2)),
    contentType: 'application/json',
  });
  expect(measurements.every((entry) => entry.shellRetained)).toBe(true);
  expect(Math.max(...measurements.map((entry) => entry.durationMs))).toBeLessThan(300);
});
