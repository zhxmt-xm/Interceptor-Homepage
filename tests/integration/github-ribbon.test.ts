import { expect, test } from '@playwright/test';
import {
  getPreferenceOptions,
  getPreferenceTrigger,
  showHeaderControls,
  toggleHeaderLanguage,
} from './header-controls';

test('GitHub star ribbon stays clickable without covering header controls', async ({ page }) => {
  await page.goto('/');
  const ribbon = page.getByTestId('homepage.github-star');
  await expect(ribbon).toHaveCount(1);
  await expect(ribbon).toHaveAttribute('href', 'https://github.com/zhxmt-xm/Interceptor');
  await expect(ribbon).toHaveAttribute('target', '_blank');
  await expect(ribbon).toHaveAttribute('rel', 'noopener noreferrer');
  expect(
    await ribbon.evaluate((element) => {
      const transform = new DOMMatrix(getComputedStyle(element).transform);
      return Math.round((Math.atan2(transform.b, transform.a) * 180) / Math.PI);
    }),
  ).toBe(45);

  for (const locale of ['zh-CN', 'en']) {
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    for (const width of [1600, 1280, 1024, 900, 768, 641, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => scrollTo({ top: 600, behavior: 'instant' }));
      const corner = await ribbon.locator('..').boundingBox();
      if (!corner) throw new Error('GitHub corner is missing.');
      expect(corner.y).toBe(0);
      expect(corner.x + corner.width).toBe(
        await page.evaluate(() => document.documentElement.clientWidth),
      );
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
      for (const control of await page
        .locator(
          'header button:visible, header nav a:visible, header a[href$="/releases/latest"]:visible',
        )
        .all()) {
        expect(
          await control.evaluate((element) => {
            const rect = element.getBoundingClientRect();
            return [
              [0.5, 0.5],
              [0.95, 0.05],
              [0.95, 0.95],
            ].every(([x, y]) => {
              const targets = document.elementsFromPoint(
                rect.left + rect.width * x,
                rect.top + rect.height * y,
              );
              const front = targets[0];
              return (
                !targets.some((target) => element.contains(target)) ||
                Boolean(front && element.contains(front))
              );
            });
          }),
        ).toBe(true);
      }
      await showHeaderControls(page);
      await getPreferenceTrigger(page, 'theme').click();
      const themeOptions = await getPreferenceOptions(page, 'theme').boundingBox();
      if (!themeOptions) throw new Error('Theme options are missing.');
      expect(themeOptions.x).toBeGreaterThanOrEqual(0);
      expect(themeOptions.x + themeOptions.width).toBeLessThanOrEqual(width);
      await page.keyboard.press('Escape');
      if (width <= 840) await page.keyboard.press('Escape');
    }
    if (locale === 'zh-CN') await toggleHeaderLanguage(page);
  }
});

test('Star opens the repository without navigating the homepage or submitting a star', async ({
  page,
  context,
}) => {
  const repository = 'https://github.com/zhxmt-xm/Interceptor';
  const requests: string[] = [];
  await context.route('https://github.com/**', (route) => {
    requests.push(`${route.request().method()} ${route.request().url()}`);
    return route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><title>Repository</title>',
    });
  });
  await page.goto('/');
  const originalUrl = page.url();
  const newPagePromise = context.waitForEvent('page');
  await page.getByTestId('homepage.github-star').press('Enter');
  const repositoryPage = await newPagePromise;
  await expect(repositoryPage).toHaveURL(repository);
  expect(await repositoryPage.evaluate(() => window.opener === null)).toBe(true);
  await expect(page).toHaveURL(originalUrl);
  expect(requests).toEqual([`GET ${repository}`]);
  await repositoryPage.close();
});
