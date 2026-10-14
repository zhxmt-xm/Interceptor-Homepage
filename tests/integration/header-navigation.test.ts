import { expect, test } from '@playwright/test';

test('header remains at the top while scrolling and keeps anchor targets visible', async ({
  page,
}) => {
  for (const width of [1600, 853, 768, 641, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const header = page.locator('header');
    const height = await header.evaluate((element) => element.getBoundingClientRect().height);
    await page.mouse.move(width - 30, 600);
    await page.mouse.wheel(0, 900);
    await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(500);
    await expect
      .poll(() => header.evaluate((element) => element.getBoundingClientRect().top))
      .toBe(0);
    expect(await header.evaluate((element) => element.getBoundingClientRect().height)).toBe(height);
    expect(await header.evaluate((element) => getComputedStyle(element).backgroundColor)).toBe(
      await page.locator('html').evaluate((element) => getComputedStyle(element).backgroundColor),
    );

    for (const id of ['features', 'resources']) {
      if (id === 'features') {
        await page.locator('#main-navigation a[href="/#features"]').click();
      } else {
        await page.locator('footer a[href="/#resources"]').click();
      }
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect
        .poll(() =>
          page.locator(`#${id}`).evaluate((element) => element.getBoundingClientRect().top),
        )
        .toBeGreaterThanOrEqual(height);
      await expect
        .poll(() => header.evaluate((element) => element.getBoundingClientRect().top))
        .toBe(0);
      await expect(page.locator('#main-navigation')).toBeVisible();
    }

    await page.getByTestId('homepage.theme.toggle').click();
    await expect(page.getByTestId('homepage.theme.system')).toBeFocused();
    await page.keyboard.press('Escape');
  }
});

test('download retains its primary style and leads the right-side action group', async ({
  page,
}) => {
  await page.goto('/');
  const destination = 'https://github.com/zhxmt-xm/Interceptor/releases/latest';
  for (const locale of ['zh-CN', 'en']) {
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    for (const width of [900, 853, 768, 721, 720, 641]) {
      await page.setViewportSize({ width, height: 900 });
      const download = page.locator(`header a[href="${destination}"]:visible`);
      await expect(download).toHaveCount(1);
      expect(await download.evaluate((element) => element.closest('nav') === null)).toBe(true);
      expect(
        await download.evaluate((element) => getComputedStyle(element).backgroundColor),
      ).not.toBe('rgba(0, 0, 0, 0)');
      await expect(download).not.toHaveCSS('box-shadow', 'none');
      const right = await download.evaluate((element) => element.getBoundingClientRect().right);
      for (const control of await page.locator('header button:visible').all()) {
        expect(
          await control.evaluate((element) => element.getBoundingClientRect().left),
        ).toBeGreaterThanOrEqual(right);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
      await expect(page.locator('#main-navigation')).toBeVisible();
      await expect(page.locator(`#main-navigation a[href="${destination}"]`)).toHaveCount(0);
    }
    if (locale === 'zh-CN') await page.getByTestId('homepage.language').click();
  }
});

for (const width of [1600, 768, 641, 390]) {
  test(`download opens a separate tab and preserves the homepage at ${width}px`, async ({
    page,
    context,
  }) => {
    const destination = 'https://github.com/zhxmt-xm/Interceptor/releases/latest';
    // Only the external response is isolated; the website must create a real browser tab.
    await context.route(destination, (route) =>
      route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<!doctype html><title>Release destination</title>',
      }),
    );
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.evaluate(async () => {
      for (const [family, weights] of Object.entries({
        Inter: ['400', '450', '500', '600', '700'],
        'JetBrains Mono': ['400', '500'],
      })) {
        for (const weight of weights) {
          const faces = await document.fonts.load(`${weight} 16px "${family}"`, 'Interceptor');
          if (!faces.length || faces.some((face) => face.status !== 'loaded')) {
            throw new Error(`Font not loaded: ${family} ${weight}`);
          }
        }
      }
      await document.fonts.ready;
    });
    await page.locator('#main-navigation a[href="/#features"]').click();
    if (width <= 640) await page.getByTestId('homepage.menu').click();
    const originalUrl = page.url();
    const originalScroll = await page.evaluate(() => scrollY);
    const newPagePromise = context.waitForEvent('page');
    const download = page.locator(`header a[href="${destination}"]:visible`);
    if (width <= 640) await download.press('Enter');
    else {
      const bounds = await download.boundingBox();
      if (!bounds) throw new Error('The pinned download control is not visible.');
      // Click the visible control without locator.click() first scrolling the sticky element.
      await page.mouse.click(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    }
    const releasePage = await newPagePromise;
    await expect(releasePage).toHaveURL(destination);
    expect(await releasePage.evaluate(() => window.opener === null)).toBe(true);
    await expect(page).toHaveURL(originalUrl);
    expect(await page.evaluate(() => scrollY)).toBe(originalScroll);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#main-navigation')).toBeVisible();
    if (width <= 640) await expect(page.locator('#header-actions-menu')).toBeHidden();
    await releasePage.close();
  });
}
