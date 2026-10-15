import { expect, test } from '@playwright/test';
import { getPreferenceTrigger, toggleHeaderLanguage } from './header-controls';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});

test('production entry has no design control API or candidate metadata', async ({ page }) => {
  expect(await page.evaluate(() => '__setState' in window)).toBe(false);
  await expect(page.locator('meta[name="description"]')).not.toHaveAttribute(
    'content',
    /design preview|设计预览/i,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    await page.title(),
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    'content',
    (await page.locator('meta[name="description"]').getAttribute('content')) ?? '',
  );
});

test('language and FAQ work through the actual UI', async ({ page }) => {
  await toggleHeaderLanguage(page);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page).toHaveTitle('Interceptor — Clarity for every request');

  const firstFaq = page.getByTestId('homepage.faq.0');
  const secondFaq = page.getByTestId('homepage.faq.1');
  await firstFaq.press('Enter');
  await expect(firstFaq.locator('..')).toHaveAttribute('open', '');
  await secondFaq.click();
  await expect(firstFaq.locator('..')).not.toHaveAttribute('open');
  await expect(secondFaq.locator('..')).toHaveAttribute('open', '');
  await secondFaq.press('Enter');
  await expect(secondFaq.locator('..')).not.toHaveAttribute('open');

  await toggleHeaderLanguage(page);
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page).toHaveTitle('Interceptor — 看清每个请求');
});

test('mobile right-side menu stays separate from the always-visible navigation', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.getByTestId('homepage.menu');
  const navigation = page.locator('#main-navigation');
  await expect(navigation).toBeVisible();
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  const actionsMenu = page.locator('#header-actions-menu');
  await expect(getPreferenceTrigger(page, 'theme')).toBeFocused();
  await expect(actionsMenu.locator('nav, a[href^="#"], a[href^="/guide"]')).toHaveCount(0);
  const menuTop = await actionsMenu.evaluate((element) => element.getBoundingClientRect().top);
  const navBottom = await navigation.evaluate((element) => element.getBoundingClientRect().bottom);
  expect(menuTop).toBeGreaterThan(navBottom);
  await expect(navigation).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(actionsMenu).toBeHidden();
  await expect(navigation).toBeVisible();

  await navigation.locator('a[href="/#features"]').click();
  await expect(page).toHaveURL(/#features$/);
  await expect(navigation).toBeVisible();
});

test('both languages fit desktop, tablet and narrow mobile viewports', async ({ page }) => {
  for (const width of [320, 390, 768, 1280, 1600]) {
    await page.setViewportSize({ width, height: 900 });
    for (const language of ['en', 'zh-CN']) {
      await toggleHeaderLanguage(page);
      await expect(page.locator('html')).toHaveAttribute('lang', language);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
    }
  }
});

test('wheel and keyboard scrolling work with reduced motion', async ({ page }) => {
  await page.locator('main').focus();
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.mouse.move(1500, 600);
  await page.mouse.wheel(0, 500);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
  const before = await page.evaluate(() => scrollY);
  await page.keyboard.press('PageDown');
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(before);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});

test('images, anchors and explicit private destinations are intact', async ({ page }) => {
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0),
      )
      .toBe(true);
  }
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((link) => link.getAttribute('href') ?? '')
        .filter((href) => !document.getElementById(href.slice(1))),
    );
  expect(brokenAnchors).toEqual([]);
  await expect(page.getByTestId('homepage.download')).toHaveCount(1);
  await expect(page.getByTestId('homepage.download')).toHaveAttribute(
    'href',
    'https://github.com/zhxmt-xm/Interceptor/releases/latest',
  );
  await expect(page.locator('a[href="#"]')).toHaveCount(0);
  await expect(page.locator('video')).toHaveCount(0);
});

test('feature modules lead directly to resources without redundant download sections', async ({
  page,
}) => {
  expect(
    await page.locator('#features').evaluate((element) => element.nextElementSibling?.id),
  ).toBe('resources');
  await expect(page.locator('#download')).toHaveCount(0);
  await expect(page.locator('a[href="#download"]')).toHaveCount(0);
  await expect(page.locator('#workflow')).toHaveCount(0);
  await expect(page.locator('a[href="#workflow"]')).toHaveCount(0);
  await expect(
    page.locator(
      '#resources a[href="https://github.com/zhxmt-xm/Interceptor/blob/main/README.md#quick-start"]',
    ),
  ).toHaveCount(1);
});

test('a single header download links directly to the latest release at every viewport', async ({
  page,
}) => {
  const destination = 'https://github.com/zhxmt-xm/Interceptor/releases/latest';
  for (const locale of ['zh-CN', 'en']) {
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    for (const width of [1600, 900, 768, 641, 640, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      if (width <= 840) await page.getByTestId('homepage.menu').click();
      const download = page.getByTestId('homepage.download');
      await expect(download).toHaveCount(1);
      await expect(download).toHaveAttribute('href', destination);
      await expect(download).toHaveText(locale === 'zh-CN' ? '下载' : 'Download');
      await expect(download).toHaveAttribute('target', '_blank');
      await expect(download).toHaveAttribute('rel', 'noopener noreferrer');
      await download.focus();
      await expect(download).toBeFocused();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
      if (width <= 840) await page.keyboard.press('Escape');
    }
    const faq = page.getByTestId('homepage.faq.3');
    await faq.click();
    await expect(faq.locator('..')).not.toContainText(/v\d+\.\d+\.\d+/);
    await expect(faq.locator('..')).toContainText('Intel x64');
    await expect(faq.locator('..')).toContainText('arm64');
    await expect(faq.locator('..')).toContainText('EXE');
    await expect(faq.locator('..')).toContainText('MSI');
    await expect(faq.locator('..')).toContainText('GitHub Releases');
    await expect(faq.locator('..')).toContainText(
      locale === 'zh-CN' ? '仓库访问权限' : 'repository access',
    );
    await expect(page.locator('body')).not.toContainText(/v\d+\.\d+\.\d+/);
    await faq.click();

    const installation = page.getByTestId('homepage.faq.4');
    await installation.click();
    await expect(installation.locator('..')).toContainText('ad-hoc');
    await expect(installation.locator('..')).toContainText('SmartScreen');
    await expect(installation.locator('..')).toContainText('MSI');
    await installation.click();
    if (locale === 'zh-CN') await toggleHeaderLanguage(page);
  }
});
