import { expect, test } from '@playwright/test';
import { toggleHeaderLanguage } from './header-controls';

test('the outline identifies one current section with the approved emphasis', async ({ page }) => {
  for (const colorScheme of ['light', 'dark'] as const) {
    await page.emulateMedia({ colorScheme });
    for (const locale of ['zh', 'en']) {
      await page.goto(locale === 'en' ? '/en/guide/workspace' : '/guide/workspace');
      await expect(page.getByTestId('guide.article')).toBeVisible();
      const outline = page.getByTestId('guide.outline');
      const current = outline.locator('[aria-current="location"]');
      expect(await current.count(), 'the outline must identify the current reading section').toBe(
        1,
      );
      await expect(current).toHaveAttribute('href', '#navigation');
      await expect(current).toHaveCSS('font-size', '12px');
      await expect(current).toHaveCSS('font-weight', '600');
      await expect(current).toHaveCSS(
        'color',
        colorScheme === 'light' ? 'rgb(106, 91, 240)' : 'rgb(47, 212, 184)',
      );
      await expect(outline.locator('a:not([aria-current])').first()).toHaveCSS('font-size', '11px');
      await expect(outline.locator('a:not([aria-current])').first()).toHaveCSS(
        'text-decoration-color',
        'rgba(0, 0, 0, 0)',
      );
    }
  }
});

test('real wheel scrolling follows the section without rewriting history or replacing the article', async ({
  page,
}) => {
  await page.goto('/guide/workspace');
  const article = page.getByTestId('guide.article');
  await expect(article).toBeVisible();
  const element = await article.elementHandle();
  if (!element) throw new Error('The reader article is missing.');
  const outline = page.getByTestId('guide.outline');
  await outline.locator('a[href="#navigation"]').click();
  const href = await outline.locator('a').nth(1).getAttribute('href');
  if (!href) throw new Error('The second outline link is missing.');
  const before = await page.evaluate(() => ({ url: location.href, history: history.length }));
  const delta = await page.evaluate((fragment) => {
    const id = decodeURIComponent(fragment.slice(1));
    const target =
      document.getElementById(`guide-anchor-${id}`) ??
      document.getElementById(`guide-heading-${id}`);
    if (!target) throw new Error(`Guide target not found: ${id}`);
    return (
      Math.ceil(
        target.getBoundingClientRect().top -
          Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) -
          Number.parseFloat(getComputedStyle(target).scrollMarginTop),
      ) + 48
    );
  }, href);
  await page.mouse.move(800, 450);
  await page.mouse.wheel(0, delta);
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', href);
  expect(await page.evaluate(() => ({ url: location.href, history: history.length }))).toEqual(
    before,
  );
  expect(await element.evaluate((node) => node.isConnected)).toBe(true);
  await page.mouse.wheel(
    0,
    await page.evaluate(() => document.documentElement.scrollHeight - innerHeight - scrollY),
  );
  await page.waitForFunction(
    () => Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight,
  );
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', '#close');
  expect(page.url()).toBe(before.url);
});

test('outline clicks, repeated targets, history and language keep the current section in sync', async ({
  page,
}) => {
  await page.goto('/en/guide/workspace');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  const origin = await page.evaluate(() => performance.timeOrigin);
  const outline = page.getByTestId('guide.outline');
  const third = outline.locator('a[href="#walkthrough-workspace-window-controls"]');
  await third.click();
  await expect(third).toHaveAttribute('aria-current', 'location');
  const length = await page.evaluate(() => history.length);
  await page.mouse.move(800, 450);
  await page.mouse.wheel(
    0,
    await page.evaluate(() => document.documentElement.scrollHeight - innerHeight - scrollY),
  );
  await page.waitForFunction(
    () => Math.ceil(scrollY + innerHeight) >= document.documentElement.scrollHeight,
  );
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', '#close');
  await third.click();
  await expect(third).toHaveAttribute('aria-current', 'location');
  expect(await page.evaluate(() => history.length)).toBe(length);
  await outline.locator('a[href="#close"]').click();
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', '#close');
  await page.goBack();
  await expect(third).toHaveAttribute('aria-current', 'location');
  await page.goForward();
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', '#close');
  await toggleHeaderLanguage(page);
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'zh-CN');
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', '#close');
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(origin);
});

test('search step destinations and refreshed deep links select the owning section', async ({
  page,
}) => {
  await page.goto('/guide/workspace');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await page.keyboard.press('Control+k');
  await page.getByTestId('guide.search.input').fill('公开指纹 有效期');
  const result = page.locator(
    '[data-automation-id="guide.search.result"][href^="/guide/settings#search-step-"]',
  );
  await expect(result).toHaveCount(1);
  await result.click();
  await expect(page.getByTestId('guide.search.dialog')).not.toBeVisible();
  const current = page.getByTestId('guide.outline').locator('[aria-current="location"]');
  await expect(current).toHaveAttribute('href', '#https-decryption');
  const fragment = new URL(page.url()).hash;
  await page.reload();
  await expect(current).toHaveAttribute('href', '#https-decryption');
  await toggleHeaderLanguage(page);
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');
  await expect(current).toHaveAttribute('href', '#https-decryption');
  expect(new URL(page.url()).hash).toBe(fragment);
});

test('the outline reveals its current link after height, language and width changes', async ({
  page,
}, testInfo) => {
  await page.goto('/guide/settings#updates');
  const outline = page.getByTestId('guide.outline');
  const current = outline.locator('[aria-current="location"]');
  const readBoundary = () =>
    outline.evaluate((element) => {
      const link = element.querySelector('[aria-current="location"]');
      if (!link) throw new Error('The current outline link is missing.');
      const item = link.getBoundingClientRect();
      const bounds = element.getBoundingClientRect();
      return {
        viewport: { width: innerWidth, height: innerHeight },
        language: document.documentElement.lang,
        scrollTop: element.scrollTop,
        scrollHeight: element.scrollHeight,
        clientHeight: element.clientHeight,
        outline: { top: bounds.top, bottom: bounds.bottom },
        current: { top: item.top, bottom: item.bottom, height: item.height },
        currentIsLast: link === element.querySelector('a:last-child'),
      };
    });
  const positions: Awaited<ReturnType<typeof readBoundary>>[] = [];
  const expectCurrentAtEnd = async (): Promise<void> => {
    await expect(current).toBeInViewport();
    // Native scrollHeight is integral even when the final line box is fractional.
    await expect
      .poll(async () => {
        const boundary = await readBoundary();
        return (
          boundary.currentIsLast &&
          boundary.current.top >= boundary.outline.top &&
          boundary.current.height <= boundary.clientHeight &&
          Math.ceil(boundary.scrollTop + boundary.clientHeight) >= boundary.scrollHeight
        );
      })
      .toBe(true);
    positions.push(await readBoundary());
  };
  await expect(current).toHaveAttribute('href', '#updates');
  await page.evaluate(() => document.fonts.ready);
  const scroll = await page.evaluate(() => scrollY);
  await page.setViewportSize({ width: 1600, height: 500 });
  await expectCurrentAtEnd();
  await expect.poll(() => outline.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);
  expect(await page.evaluate(() => scrollY)).toBe(scroll);
  await toggleHeaderLanguage(page);
  await expect(current).toHaveAttribute('href', '#updates');
  await expectCurrentAtEnd();
  await page.setViewportSize({ width: 900, height: 500 });
  await expect(outline).not.toBeVisible();
  await page.setViewportSize({ width: 1600, height: 500 });
  await expect(current).toHaveAttribute('href', '#updates');
  await expectCurrentAtEnd();
  await page.setViewportSize({ width: 1600, height: 900 });
  await expectCurrentAtEnd();
  await testInfo.attach('outline-native-scroll-boundaries', {
    body: Buffer.from(JSON.stringify(positions, null, 2)),
    contentType: 'application/json',
  });
});

test('chapter changes and leaving the reader do not retain stale section state', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/guide/workspace#close');
  const outline = page.getByTestId('guide.outline');
  const expectCurrentAtFirst = async () => {
    await expect
      .poll(async () => {
        const currentHref = await outline.locator('[aria-current="location"]').getAttribute('href');
        const firstHref = await outline.locator('a').first().getAttribute('href');
        return currentHref !== null && currentHref === firstHref;
      })
      .toBe(true);
  };
  await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', '#close');
  await page.getByTestId('guide.chapter.capture').click();
  await expectCurrentAtFirst();
  await page.locator('header a[href="/"]').click();
  await expect(page.getByTestId('guide.root')).toHaveCount(0);
  await page.mouse.wheel(0, 300);
  await page.goBack();
  await expectCurrentAtFirst();
  expect(errors).toEqual([]);
});

test.describe('high-density reading', () => {
  test.use({ deviceScaleFactor: 2 });

  test('every outline target becomes current after native anchor scrolling', async ({ page }) => {
    test.setTimeout(60_000);
    for (const chapter of ['workspace', 'settings', 'capture']) {
      await page.goto(`/guide/${chapter}`);
      const outline = page.getByTestId('guide.outline');
      await expect(outline).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      const hrefs = await outline
        .locator('a')
        .evaluateAll((links) => links.map((link) => link.getAttribute('href')));
      for (const href of hrefs) {
        if (!href) throw new Error('An outline destination is missing.');
        await outline.locator(`a[href="${href}"]`).click();
        await expect(outline.locator('[aria-current="location"]')).toHaveAttribute('href', href);
      }
    }
  });
});
