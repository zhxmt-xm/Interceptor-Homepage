import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';

const sourceDirectory = path.resolve('guidebook/zh-CN');
const chapters = readdirSync(sourceDirectory)
  .filter((name) => name.endsWith('.md'))
  .map((name) => ({
    slug: name.slice(0, -3),
    source: readFileSync(path.join(sourceDirectory, name), 'utf8'),
  }));

test('header opens Guidebook directly on desktop and mobile in either UI language', async ({
  page,
}) => {
  test.setTimeout(60_000);
  for (const width of [1600, 853, 768, 721, 720, 641, 390, 320]) {
    for (const locale of ['zh', 'en']) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      if (locale === 'en') await page.getByTestId('homepage.language').click();
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
  for (const chapter of chapters) {
    const response = await page.goto(`/guide/${chapter.slug}`);
    expect(response?.status()).toBe(200);
    const title = chapter.source.match(/^# (.+)$/m)?.[1];
    await expect(page.locator('h1')).toHaveText(title ?? '');
    const article = page.getByTestId('guide.article');
    await expect(article).toHaveAttribute('lang', 'zh-CN');
    const headings = [...chapter.source.matchAll(/^## (.+)$/gm)].map((match) => match[1]);
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
    const brokenAnchors = await article
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((link) => decodeURIComponent((link.getAttribute('href') ?? '').slice(1)))
          .filter(
            (fragment) =>
              fragment &&
              !document.getElementById(`guide-anchor-${fragment}`) &&
              !document.getElementById(`guide-heading-${fragment}`),
          ),
      );
    expect(brokenAnchors).toEqual([]);
  }
  expect(errors).toEqual([]);
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
      await page.getByTestId('homepage.theme.toggle').click();
      await page.getByTestId(`homepage.theme.${theme}`).click();
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
    }
  }
  await page.getByTestId('homepage.language').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.getByTestId('guide.draft')).toContainText('Chinese');
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
