import { expect, test } from '@playwright/test';
import { getPreferenceTrigger, showHeaderControls, toggleHeaderLanguage } from './header-controls';

for (const route of ['/', '/guide']) {
  test(`navigation remains visible and centered independently of the right controls on ${route}`, async ({
    page,
  }) => {
    await page.goto(route);
    for (const locale of ['zh-CN', 'en']) {
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      for (const width of [
        1600, 853, 841, 840, 821, 820, 768, 691, 641, 640, 481, 480, 390, 320, 280, 260,
      ]) {
        await page.setViewportSize({ width, height: 900 });
        const navigation = page.locator('#main-navigation');
        await expect(navigation).toBeVisible();
        await expect(navigation.getByRole('link')).toHaveCount(2);
        const geometry = await navigation.evaluate((element) => {
          const rect = element.getBoundingClientRect();
          return {
            center: rect.x + rect.width / 2,
            viewportCenter: document.documentElement.clientWidth / 2,
            centerY: rect.y + rect.height / 2,
            headerCenterY: (element.closest('header')?.getBoundingClientRect().height ?? 0) / 2,
          };
        });
        expect(Math.abs(geometry.center - geometry.viewportCenter)).toBeLessThan(1);
        expect(Math.abs(geometry.centerY - geometry.headerCenterY)).toBeLessThan(1);
        const overlaps = await navigation.evaluate((element) => {
          const nav = element.getBoundingClientRect();
          const header = element.closest('header');
          if (!header) throw new Error('Header missing');
          return [
            ...header.querySelectorAll(
              'a[aria-label="Interceptor"], button, a[href$="/releases/latest"]',
            ),
          ].some((control) => {
            const rect = control.getBoundingClientRect();
            return (
              rect.width > 0 &&
              rect.left < nav.right &&
              rect.right > nav.left &&
              rect.top < nav.bottom &&
              rect.bottom > nav.top
            );
          });
        });
        expect(overlaps).toBe(false);
        await expect(navigation.locator('a[href$="/releases/latest"]')).toHaveCount(0);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
          width,
        );
        if (width > 840) {
          const download = page.getByTestId('homepage.download');
          expect(await download.evaluate((element) => element.closest('nav') === null)).toBe(true);
          await expect(download).not.toHaveCSS('box-shadow', 'none');
          await expect(download).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
          const right = await download.evaluate((element) => element.getBoundingClientRect().right);
          const themeLeft = await getPreferenceTrigger(page, 'theme').evaluate(
            (element) => element.getBoundingClientRect().left,
          );
          expect(right).toBeLessThan(themeLeft);
        }

        const edgeControl =
          width > 840 ? getPreferenceTrigger(page, 'language') : page.getByTestId('homepage.menu');
        const edgeGap = await edgeControl.evaluate(
          (element) => document.documentElement.clientWidth - element.getBoundingClientRect().right,
        );
        expect(edgeGap).toBeCloseTo(width > 640 ? 104 : 36, 1);
      }
      if (locale === 'zh-CN') await toggleHeaderLanguage(page);
    }
  });
}

test('small-window actions fill the download row and align labelled preferences', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  for (const locale of ['zh-CN', 'en']) {
    await page.setViewportSize({ width: 1600, height: 900 });
    const download = page.getByTestId('homepage.download');
    const desktopDownload = await download.boundingBox();
    if (!desktopDownload) throw new Error('Desktop download missing');
    expect(desktopDownload.height).toBe(36);
    for (const width of [260, 280, 320, 390, 640, 691]) {
      await page.setViewportSize({ width, height: 500 });
      await showHeaderControls(page);
      const mobileDownload = await download.boundingBox();
      if (!mobileDownload) throw new Error('Menu download missing');
      const contentWidth = await page.locator('#header-actions-menu').evaluate((element) => {
        const style = getComputedStyle(element);
        return element.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      });
      expect(mobileDownload.width).toBeCloseTo(contentWidth, 1);
      expect(mobileDownload.height).toBe(40);
      const theme = getPreferenceTrigger(page, 'theme');
      const language = getPreferenceTrigger(page, 'language');
      expect(await theme.innerText()).toContain(locale === 'zh-CN' ? '外观' : 'Appearance');
      expect(await language.innerText()).toContain(locale === 'zh-CN' ? '语言' : 'Language');
      const themeBounds = await theme.boundingBox();
      const languageBounds = await language.boundingBox();
      if (!themeBounds || !languageBounds) throw new Error('Settings rows missing');
      expect(mobileDownload.y).toBeGreaterThan(languageBounds.y + languageBounds.height);
      const footer = await download.locator('..').boundingBox();
      if (!footer) throw new Error('Download footer missing');
      expect(mobileDownload.y - footer.y).toBe(17);
      expect(themeBounds.x).toBeCloseTo(languageBounds.x, 1);
      expect(themeBounds.width).toBeCloseTo(languageBounds.width, 1);
      const themeIcon = await theme.locator('svg').first().boundingBox();
      const languageIcon = await language.locator('svg').first().boundingBox();
      if (!themeIcon || !languageIcon) throw new Error('Settings icons missing');
      expect(themeIcon.x).toBeCloseTo(languageIcon.x, 1);
      const menuBounds = await page.locator('#header-actions-menu').boundingBox();
      if (!menuBounds) throw new Error('Actions menu missing');
      expect(menuBounds.x).toBeGreaterThanOrEqual(20);
      expect(menuBounds.x + menuBounds.width).toBeLessThanOrEqual(width - 36);
      expect(menuBounds.height).toBeLessThanOrEqual(185);
      const unobstructed = await page.getByTestId('homepage.menu').evaluate((element) => {
        const rect = element.getBoundingClientRect();
        return [0.1, 0.5, 0.9].every((x) =>
          [0.1, 0.5, 0.9].every((y) =>
            element.contains(
              document.elementFromPoint(rect.x + rect.width * x, rect.y + rect.height * y),
            ),
          ),
        );
      });
      expect(unobstructed).toBe(true);
      await page.screenshot({ path: testInfo.outputPath(`${locale}-${width}.png`) });
      await page.keyboard.press('Escape');
      await expect(page.getByTestId('homepage.menu')).toBeFocused();
      if (width === 260 && locale === 'en') {
        const navigation = page.locator('#main-navigation');
        await navigation.hover();
        await page.mouse.wheel(160, 0);
        await expect
          .poll(() => navigation.evaluate((element) => element.scrollLeft))
          .toBeGreaterThan(0);
        await navigation.getByRole('link').first().focus();
        await page.keyboard.press('Tab');
        const guideLink = navigation.getByRole('link').last();
        await expect(guideLink).toBeFocused();
        expect(await navigation.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
        const guideBounds = await guideLink.boundingBox();
        const navigationBounds = await navigation.boundingBox();
        if (!guideBounds || !navigationBounds) throw new Error('Navigation link missing');
        expect(guideBounds.x).toBeGreaterThanOrEqual(navigationBounds.x - 1);
        expect(guideBounds.x + guideBounds.width).toBeLessThanOrEqual(
          navigationBounds.x + navigationBounds.width + 1,
        );
      }
    }
    if (locale === 'zh-CN') await toggleHeaderLanguage(page);
  }
});
