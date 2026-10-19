import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { showHeaderControls, toggleHeaderLanguage } from './header-controls';

const sourceDirectory = path.resolve('guidebook/zh-CN');
const chapters = readdirSync(sourceDirectory)
  .filter((name) => name.endsWith('.md'))
  .map((name) => ({
    slug: name.slice(0, -3),
    source: readFileSync(path.join(sourceDirectory, name), 'utf8'),
  }));

test('step images reserve their natural dimensions for stable article anchors', async ({
  page,
}) => {
  await page.goto('/guide/composer');
  const image = page.getByTestId('guide.article').locator('img').first();
  await expect(image).toHaveAttribute('width', /^[1-9]\d*$/);
  await expect(image).toHaveAttribute('height', /^[1-9]\d*$/);
  await image.scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      image.evaluate(
        (element: HTMLImageElement) =>
          element.complete &&
          element.width > 0 &&
          element.naturalWidth === Number(element.getAttribute('width')) &&
          element.naturalHeight === Number(element.getAttribute('height')),
      ),
    )
    .toBe(true);
});

test('English guide renders translated chapters and keeps the current section when switching language', async ({
  page,
}) => {
  await page.goto('/guide/capture?lang=en');
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');
  await expect(page.locator('h1')).toHaveText('Capture: find and understand traffic');
  await expect(page.getByTestId('guide.chapter.getting-started')).toContainText('Getting started');
  await page.getByTestId('guide.outline').locator('a').nth(1).click();
  const fragment = new URL(page.url()).hash;
  await toggleHeaderLanguage(page);
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'zh-CN');
  expect(new URL(page.url()).hash).toBe(fragment);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
  await toggleHeaderLanguage(page);
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');
  expect(new URL(page.url()).hash).toBe(fragment);
  await expect(page.locator('h1')).toHaveText('Capture: find and understand traffic');
});

test('guide steps display original screenshots without video players or timestamps', async ({
  page,
}) => {
  test.setTimeout(90_000);
  await page.goto('/guide/composer');
  const article = page.getByTestId('guide.article');
  await expect(article).toBeVisible();
  const source = readFileSync(path.join(sourceDirectory, 'composer.md'), 'utf8');
  const imagePaths = [...source.matchAll(/!\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
  const imageCount = imagePaths.length;
  expect(imageCount).toBeGreaterThanOrEqual(10);
  await expect(article.locator('video, track, [data-guide-video]')).toHaveCount(0);
  await expect(article.locator('a[href*=".mp4"], a[href*=".vtt"], a[href$="-video"]')).toHaveCount(
    0,
  );
  await expect(article.locator('img')).toHaveCount(imageCount);
  const expectedSizes = imagePaths.map((imagePath) => {
    const bytes = readFileSync(path.resolve(sourceDirectory, imagePath));
    expect(bytes.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    return {
      width: bytes.readUInt32BE(16),
      height: bytes.readUInt32BE(20),
    };
  });
  const attributes = await article.locator('img').evaluateAll((images) =>
    images.map((image) => ({
      width: Number(image.getAttribute('width')),
      height: Number(image.getAttribute('height')),
      alt: image.getAttribute('alt'),
    })),
  );
  expect(attributes.map(({ width, height }) => ({ width, height }))).toEqual(expectedSizes);
  expect(attributes.every((image) => Boolean(image.alt?.trim()))).toBe(true);
  for (const [index, image] of (await article.locator('img').all()).entries()) {
    await image.scrollIntoViewIfNeeded();
    expect(
      await image.evaluate(async (element: HTMLImageElement) => {
        await element.decode();
        return {
          loaded: element.complete,
          width: element.naturalWidth,
          height: element.naturalHeight,
        };
      }),
    ).toEqual({ loaded: true, ...expectedSizes[index] });
  }
  await expect(article).toContainText('x-interceptor-guide');
  await expect(article).toContainText('composer-demo');
});

test('the homepage step entry reaches illustrated chapters without another document load', async ({
  page,
}) => {
  for (const locale of ['zh', 'en']) {
    const query = locale === 'en' ? '?lang=en' : '';
    await page.goto('/');
    if (locale === 'en') await toggleHeaderLanguage(page);
    await page.keyboard.press('Escape');
    const origin = await page.evaluate(() => performance.timeOrigin);
    const entry = page.getByTestId('homepage.guideSteps');
    await expect(entry).toHaveAttribute('href', `/guide${query}#walkthroughs`);
    await entry.click();
    await expect(page).toHaveURL(new RegExp(`/guide/?${query ? '\\?lang=en' : ''}#walkthroughs$`));
    await expect(page.locator('#guide-anchor-walkthroughs')).toHaveCount(1);
    await page
      .getByTestId('guide.article')
      .locator(`a[href="/guide/transfer${query}#walkthrough"]`)
      .click();
    await expect(page.locator('#guide-anchor-walkthrough')).toHaveCount(1);
    const image = page.getByTestId('guide.article').locator('img').first();
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element: HTMLImageElement) => element.decode());
    expect(await page.evaluate(() => performance.timeOrigin)).toBe(origin);
  }
});

test('all illustrated chapters expose PNG originals in both languages without video requests', async ({
  page,
}) => {
  test.setTimeout(180_000);
  const recordings: string[] = [];
  page.on('request', (request) => {
    if (/\.(mp4|vtt)$/.test(new URL(request.url()).pathname)) recordings.push(request.url());
  });
  let checkedImages = 0;
  for (const language of ['zh-CN', 'en']) {
    for (const chapter of chapters) {
      const source = readFileSync(path.resolve(`guidebook/${language}/${chapter.slug}.md`), 'utf8');
      const expectedImages = [...source.matchAll(/!\[[^\]]+\]\(([^)]+)\)/g)].length;
      await page.goto(`/guide/${chapter.slug}${language === 'en' ? '?lang=en' : ''}`);
      const article = page.getByTestId('guide.article');
      await expect(article).toHaveAttribute('lang', language);
      await expect(article.locator('video, track, [data-guide-video]')).toHaveCount(0);
      await expect(article.locator('img')).toHaveCount(expectedImages);
      const originals = await article.locator('img').evaluateAll((images) =>
        images.map((image) => {
          const anchor = image.parentElement;
          return {
            src: image.getAttribute('src'),
            href: anchor?.getAttribute('href'),
            tag: anchor?.tagName,
            target: anchor?.getAttribute('target'),
            rel: anchor?.getAttribute('rel'),
            nested: anchor?.parentElement?.closest('a') !== null,
          };
        }),
      );
      for (const original of originals) {
        expect(original).toMatchObject({ tag: 'A', target: '_blank', nested: false });
        expect(original.href).toBe(original.src);
        expect(original.rel).toContain('noopener');
      }
      checkedImages += originals.length;
    }
  }
  expect(checkedImages).toBeGreaterThan(0);
  expect(recordings).toEqual([]);
});

test('failed reader downloads show an explicit error while site navigation remains available', async ({
  page,
}) => {
  await page.route('**/assets/GuidePage-*.js', (route) => route.abort('failed'));
  await page.goto('/guide/rules');
  await expect(page.getByTestId('guide.error')).toBeVisible();
  await expect(page.getByTestId('guide.retry')).toBeVisible();
  await expect(page.getByTestId('homepage.navigation.guide')).toBeVisible();
  await page.unroute('**/assets/GuidePage-*.js');
  await page.getByTestId('guide.retry').click();
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Rules');
});

test('header opens Guidebook directly on desktop and mobile in either UI language', async ({
  page,
}) => {
  test.setTimeout(60_000);
  for (const width of [1600, 853, 768, 721, 720, 641, 390, 320]) {
    for (const locale of ['zh', 'en']) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      if (locale === 'en') await toggleHeaderLanguage(page);
      const guide = page.getByTestId('homepage.navigation.guide');
      await expect(guide).toBeVisible();
      await expect(guide).toHaveAttribute('href', locale === 'en' ? '/guide?lang=en' : '/guide');
      await expect(guide).toHaveText(locale === 'en' ? 'User Guide' : '使用指南');
      await guide.focus();
      await page.keyboard.press('Enter');
      await expect(page.getByTestId('guide.root')).toBeVisible();
      await expect(page).toHaveTitle(
        locale === 'en' ? 'User Guide — Interceptor' : '使用指南 — Interceptor',
      );
      await expect(page.locator('html')).toHaveAttribute('lang', locale === 'en' ? 'en' : 'zh-CN');
      await expect(page.locator('#main-navigation')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
    }
  }
});

test('chapter and website navigation use one document and support browser history', async ({
  page,
}) => {
  await page.goto('/guide/capture');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await page.locator('a[href="#main-content"]').focus();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('guide.root')).toBeFocused();
  const origin = await page.evaluate(() => performance.timeOrigin);
  const documentRequests: string[] = [];
  page.on('request', (request) => {
    if (request.resourceType() === 'document') documentRequests.push(request.url());
  });
  await page.getByTestId('guide.chapter.composer').click();
  await expect(page).toHaveURL(/\/guide\/composer\/?$/);
  await expect(page.locator('h1')).toContainText('Composer');
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(origin);
  await page.goBack();
  await expect(page.locator('h1')).toContainText('Capture');
  await page.goForward();
  await expect(page.locator('h1')).toContainText('Composer');
  await page.locator('#main-navigation a[href="/#features"]').click();
  await expect(page).toHaveURL(/\/#features$/);
  await expect(page.locator('#features')).toBeVisible();
  await page.getByTestId('homepage.navigation.guide').click();
  await expect(page.getByTestId('guide.root')).toBeVisible();
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(origin);
  expect(documentRequests).toEqual([]);
});

test('homepage opens the visible guidebook and its complete chapter directory', async ({
  page,
}) => {
  await page.goto('/');
  const entry = page.getByTestId('homepage.guidebook');
  await expect(entry).toHaveAttribute('href', '/guide');
  await entry.click();
  await expect(page.getByTestId('guide.root')).toBeVisible();
  await expect(page).toHaveURL(/\/guide\/?$/);
  await expect(
    page.getByTestId('guide.chapters').locator('a[data-automation-id^="guide.chapter."]'),
  ).toHaveCount(chapters.length);
  await page.getByTestId('guide.chapter.capture').click();
  await expect(page).toHaveURL(/\/guide\/capture\/?$/);
  await expect(page.getByTestId('guide.article')).toBeVisible();
});

test('every chapter renders its real Markdown, links, final section and unique anchors', async ({
  page,
}) => {
  test.setTimeout(120_000);
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const language of ['zh-CN', 'en']) {
    for (const chapter of chapters) {
      const source = readFileSync(path.resolve(`guidebook/${language}/${chapter.slug}.md`), 'utf8');
      const response = await page.goto(
        `/guide/${chapter.slug}${language === 'en' ? '?lang=en' : ''}`,
      );
      expect(response?.status()).toBe(200);
      const title = source.match(/^# (.+)$/m)?.[1];
      await expect(page.locator('h1')).toHaveText(title ?? '');
      const article = page.getByTestId('guide.article');
      await expect(article).toHaveAttribute('lang', language);
      const headings = [...source.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
      await expect(article.locator('h2')).toHaveCount(headings.length);
      await expect(article.locator('h2').last()).toHaveText(headings.at(-1) ?? '');
      expect((await article.textContent())?.length).toBeGreaterThan(500);
      const invalidLinks = await article
        .locator('a[href]')
        .evaluateAll((links) =>
          links
            .map((link) => link.getAttribute('href') ?? '')
            .filter((href) => /\.md(?:#|$)/.test(href) && !/^https?:/.test(href)),
        );
      expect(invalidLinks).toEqual([]);
      const ids = await page.locator('[id]').evaluateAll((nodes) => nodes.map((node) => node.id));
      expect(new Set(ids).size).toBe(ids.length);
      const chapterAnchors = await page
        .locator(
          '[data-automation-id="guide.article"] a[href], [data-automation-id="guide.outline"] a[href]',
        )
        .evaluateAll((links) =>
          links
            .map((link) => new URL(link.getAttribute('href') ?? '', window.location.href))
            .filter(
              (url) =>
                url.origin === window.location.origin &&
                url.pathname === window.location.pathname &&
                url.hash !== '',
            )
            .map((url) => decodeURIComponent(url.hash.slice(1)))
            .map((fragment) => ({
              fragment,
              exists: Boolean(
                document.getElementById(`guide-anchor-${fragment}`) ??
                  document.getElementById(`guide-heading-${fragment}`),
              ),
            })),
        );
      expect(chapterAnchors.length).toBeGreaterThan(0);
      const brokenAnchors = chapterAnchors.filter((anchor) => !anchor.exists);
      expect(brokenAnchors).toEqual([]);
    }
  }
  expect(errors).toEqual([]);
});

test('section links preserve the selected language without reloading the document', async ({
  page,
}) => {
  await page.goto('/guide/capture?lang=en');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  const origin = await page.evaluate(() => performance.timeOrigin);
  const section = page.getByTestId('guide.outline').locator('a').nth(1);
  await section.click();
  await expect(page).toHaveURL(/\/guide\/capture\/?\?lang=en#.+$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByTestId('guide.draft')).toContainText('English draft');
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(origin);
  await page.goBack();
  await expect(page).toHaveURL(/\/guide\/capture\/?\?lang=en$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.goForward();
  await expect(page).toHaveURL(/\/guide\/capture\/?\?lang=en#.+$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
});

test('direct and refreshed chapter fragments reach real content below the sticky header', async ({
  page,
}) => {
  await page.goto('/guide/settings#upstream');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  const target = page.locator('#guide-anchor-upstream');
  for (const reload of [false, true]) {
    if (reload) await page.reload();
    await expect(target).toHaveCount(1);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(100);
    await expect
      .poll(async () => {
        const header = await page.locator('header').boundingBox();
        const anchor = await target.boundingBox();
        return (
          anchor !== null &&
          header !== null &&
          anchor.y >= header.y + header.height - 1 &&
          anchor.y < 300
        );
      })
      .toBe(true);
  }
});

test('Markdown links navigate between chapters and return to the directory', async ({ page }) => {
  await page.goto('/guide/getting-started');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await expect(page.getByTestId('guide.home')).toHaveCount(0);
  await page
    .getByTestId('guide.article')
    .locator('a[href="/guide/settings#https-decryption"]')
    .first()
    .click();
  await expect(page).toHaveURL(/\/guide\/settings\/?#https-decryption$/);
  await expect(page.locator('#guide-anchor-https-decryption')).toHaveCount(1);
  await page.getByTestId('guide.directory').click();
  await expect(page).toHaveURL(/\/guide\/?$/);
  await page.locator('header a[aria-label="Interceptor"]').click();
  await expect(page).toHaveURL(/\/#top$/);
});

test('guide language, themes, narrow tables and scrolling work through normal controls', async ({
  page,
}) => {
  await page.goto('/guide/tool-reference');
  for (const width of [320, 390, 768, 1600]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ['dark', 'light']) {
      await showHeaderControls(page);
      await page.getByTestId('homepage.theme.toggle').click();
      await page.getByTestId(`homepage.theme.${theme}`).click();
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
    }
  }
  await toggleHeaderLanguage(page);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');
  await expect(page.getByTestId('guide.draft')).toContainText('English');
  await page.getByTestId('guide.chapter.capture').click();
  await expect(page).toHaveURL(/\/guide\/capture\/?\?lang=en$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByTestId('guide.root').focus();
  await page.mouse.move(1000, 650);
  await page.mouse.wheel(0, 550);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
  const before = await page.evaluate(() => scrollY);
  await page.keyboard.press('PageDown');
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(before);
});

test('unknown guide routes and assets remain real HTTP 404s', async ({ request }) => {
  for (const route of [
    '/guide/no-such-chapter',
    '/guide/settings/missing',
    '/missing-page',
    '/guide/missing.png',
  ]) {
    expect((await request.get(route)).status()).toBe(404);
  }
});
