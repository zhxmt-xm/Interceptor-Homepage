import { expect, test } from '@playwright/test';

for (const route of ['/', '/guide']) {
  test(`navigation remains visible and centered independently of the right controls on ${route}`, async ({
    page,
  }) => {
    await page.goto(route);
    for (const locale of ['zh-CN', 'en']) {
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      for (const width of [1600, 1280, 1025, 1024, 853, 768, 641, 640, 390, 320]) {
        await page.setViewportSize({ width, height: 900 });
        const navigation = page.locator('#main-navigation');
        await expect(navigation).toBeVisible();
        await expect(navigation.getByRole('link')).toHaveCount(2);
        const geometry = await navigation.evaluate((element) => {
          const rect = element.getBoundingClientRect();
          return {
            center: rect.x + rect.width / 2,
            viewportCenter: document.documentElement.clientWidth / 2,
          };
        });
        expect(Math.abs(geometry.center - geometry.viewportCenter)).toBeLessThan(1);
        await expect(navigation.locator('a[href$="/releases/latest"]')).toHaveCount(0);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
          width,
        );
        if (width > 640) {
          const download = page.locator('header a[href$="/releases/latest"]:visible');
          expect(await download.evaluate((element) => element.closest('nav') === null)).toBe(true);
          await expect(download).not.toHaveCSS('box-shadow', 'none');
          await expect(download).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
          const right = await download.evaluate((element) => element.getBoundingClientRect().right);
          const themeLeft = await page
            .getByTestId('homepage.theme.toggle')
            .evaluate((element) => element.getBoundingClientRect().left);
          expect(right).toBeLessThan(themeLeft);
        }
        const edgeControl =
          width > 640 ? page.getByTestId('homepage.language') : page.getByTestId('homepage.menu');
        const edgeGap = await edgeControl.evaluate(
          (element) => document.documentElement.clientWidth - element.getBoundingClientRect().right,
        );
        expect(edgeGap).toBeCloseTo(width > 640 ? 104 : 36, 1);
      }
      if (locale === 'zh-CN') await page.getByTestId('homepage.language').click();
    }
  });
}
