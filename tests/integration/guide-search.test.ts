import { expect, test } from '@playwright/test';
import { toggleHeaderLanguage } from './header-controls';

test('every guide page has a responsive global search entry and explicit empty states', async ({
  page,
}) => {
  for (const width of [1600, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/guide', '/en/guide/capture']) {
      await page.goto(route);
      await expect(page.getByTestId('guide.article')).toBeVisible();
      const trigger = page.getByTestId('guide.search.trigger').filter({ visible: true });
      expect(await trigger.count(), 'the reader must expose its global search entry').toBe(1);
      await trigger.click();
      const input = page.getByTestId('guide.search.input');
      await expect(input).toBeFocused();
      await expect(page.getByTestId('guide.search.empty')).toBeVisible();
      await expect(page.getByTestId('guide.search.result')).toHaveCount(0);
      await input.fill('no-such-guide-phrase-92745');
      await expect(page.getByTestId('guide.search.count')).toHaveAttribute('data-count', '0');
      await expect(page.getByTestId('guide.search.empty')).toBeVisible();
      await input.fill('   ');
      await expect(page.getByTestId('guide.search.examples')).toBeVisible();
      await page.getByTestId('guide.search.example.0').click();
      await expect(page.getByTestId('guide.search.result').first()).toBeVisible();
      await input.press('Escape');
      await expect(page.getByTestId('guide.search.dialog')).not.toBeVisible();
      await expect(trigger).toBeFocused();
    }
  }
});

test('search crosses chapters, highlights actual matches and navigates to a concrete step', async ({
  page,
}) => {
  await page.goto('/guide');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  const origin = await page.evaluate(() => performance.timeOrigin);
  await page.keyboard.press('Control+k');
  const input = page.getByTestId('guide.search.input');
  await expect(input).toBeFocused();
  await input.fill('证书');
  const results = page.getByTestId('guide.search.result');
  await expect(results.locator('mark').first()).toHaveText('证书');
  expect(
    await results.evaluateAll((elements) =>
      elements.some((item) => item.getAttribute('href')?.startsWith('/guide/settings')),
    ),
  ).toBe(true);
  expect(
    await results.evaluateAll((elements) =>
      elements.some((item) => item.getAttribute('href')?.startsWith('/guide/troubleshooting')),
    ),
  ).toBe(true);
  await expect(page.getByTestId('guide.search.count')).toHaveAttribute(
    'data-count',
    String(await results.count()),
  );
  await input.fill('公开指纹 有效期');
  const target = page.locator(
    '[data-automation-id="guide.search.result"][href^="/guide/settings#search-step-"]',
  );
  await expect(target).toHaveCount(1);
  await expect(target).toHaveAttribute('href', /^\/guide\/settings#search-step-/);
  const href = await target.getAttribute('href');
  if (!href) throw new Error('Search result has no destination.');
  await target.click();
  await expect(page).toHaveURL(new URL(href, page.url()).href);
  await expect(page.getByTestId('guide.search.dialog')).not.toBeVisible();
  const fragment = decodeURIComponent(new URL(page.url()).hash.slice(1));
  const step = page.locator(`[id="guide-anchor-${fragment}"]`);
  expect(await page.evaluate(() => performance.timeOrigin)).toBe(origin);
  for (const action of ['initial', 'reload', 'repeat']) {
    if (action === 'reload') await page.reload();
    if (action === 'repeat') {
      const previousScroll = await page.evaluate(() => scrollY);
      await page.mouse.wheel(0, 1000);
      await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(previousScroll);
      await page.keyboard.press('Control+k');
      await input.fill('公开指纹 有效期');
      await target.click();
      await expect(page).toHaveURL(new URL(href, page.url()).href);
      await expect(page.getByTestId('guide.search.dialog')).not.toBeVisible();
    }
    await expect(step).toContainText('公开指纹、有效期、Generated 和 Trusted');
    await expect(step).toBeInViewport();
    await expect
      .poll(() =>
        step.evaluate((element) => {
          const header = document.querySelector('header');
          if (!header) throw new Error('The site header is missing.');
          const top = element.getBoundingClientRect().top;
          return top >= header.getBoundingClientRect().bottom && top < innerHeight;
        }),
      )
      .toBe(true);
  }
});

test('keyboard selection, repeated destinations and history preserve English routes', async ({
  page,
}) => {
  await page.goto('/en/guide');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await page.keyboard.press('Control+k');
  const input = page.getByTestId('guide.search.input');
  await input.fill('certificate');
  await expect(page.getByTestId('guide.search.result').first()).toBeVisible();
  await input.press('ArrowDown');
  const selected = page.locator('[data-automation-id="guide.search.result"][aria-selected="true"]');
  await expect(selected).toHaveCount(1);
  const href = await selected.getAttribute('href');
  if (!href) throw new Error('Selected search result has no destination.');
  expect(href).toMatch(/^\/en\/guide\//);
  await input.press('Enter');
  await expect(page).toHaveURL(new URL(href, page.url()).href);
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');
  await page.keyboard.press('Control+k');
  await input.fill('certificate');
  const same = page.locator(`[data-automation-id="guide.search.result"][href="${href}"]`);
  await same.click();
  await expect(page).toHaveURL(new URL(href, page.url()).href);
  await page.goBack();
  await expect(page).toHaveURL(/\/en\/guide$/);
  await page.goForward();
  await expect(page).toHaveURL(new URL(href, page.url()).href);
  await toggleHeaderLanguage(page);
  await page.keyboard.press('Control+k');
  await input.fill('公开指纹');
  await expect(page.getByTestId('guide.search.result').first()).toHaveAttribute(
    'href',
    /^\/guide\/.+#.+$/,
  );
  expect(await page.getByTestId('guide.search.result').first().getAttribute('href')).toMatch(
    /^\/guide\//,
  );
});

test('cancel restores focus and reading position while navigation closes a stale search', async ({
  page,
}) => {
  await page.goto('/guide');
  await page.getByTestId('guide.chapter.capture').click();
  const image = page.getByTestId('guide.article').locator('img').nth(2);
  await image.scrollIntoViewIfNeeded();
  await image.evaluate((element: HTMLImageElement) => element.decode());
  const imageButton = image.locator('..');
  await imageButton.focus();
  const scroll = await page.evaluate(() => scrollY);
  await page.keyboard.press('Control+k');
  await expect(page.getByTestId('guide.search.input')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('guide.search.dialog')).not.toBeVisible();
  await expect(imageButton).toBeFocused();
  expect(await page.evaluate(() => scrollY)).toBe(scroll);
  await page.keyboard.press('Control+k');
  await expect(page.getByTestId('guide.search.input')).toBeFocused();
  await page.goBack();
  await expect(page).toHaveURL(/\/guide$/);
  await expect(page.getByTestId('guide.search.dialog')).not.toBeVisible();
});

test('IME confirmation does not navigate and search text cannot become HTML', async ({ page }) => {
  await page.goto('/guide');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await page.keyboard.press('Control+k');
  const input = page.getByTestId('guide.search.input');
  await input.fill('证书');
  await input.dispatchEvent('keydown', { key: 'Enter', code: 'Enter', isComposing: true });
  await expect(page).toHaveURL(/\/guide$/);
  await expect(input).toBeFocused();
  await input.fill('<img src=x onerror=alert(1)>');
  await expect(page.getByTestId('guide.search.empty')).toBeVisible();
  await expect(page.getByTestId('guide.search.dialog').locator('img, script')).toHaveCount(0);
  await input.fill('[.*+?^${}()|\\\\]');
  await expect(page.getByTestId('guide.search.empty')).toBeVisible();
});

test('ready search does not fetch an index, chapter text or offscreen images', async ({ page }) => {
  await page.goto('/guide');
  await expect(page.getByTestId('guide.article')).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  const requests: string[] = [];
  await page.route('**/*', (route) => {
    requests.push(route.request().url());
    return route.abort('failed');
  });
  await page.keyboard.press('Control+k');
  const input = page.getByTestId('guide.search.input');
  for (const query of ['证书', 'recorded-after-resume', 'HTTP/2']) {
    await input.fill(query);
    await expect(page.getByTestId('guide.search.result').first()).toBeVisible();
  }
  expect(requests).toEqual([]);
});

test('search stays within both themes and small viewports with a scrollable result list', async ({
  page,
}) => {
  for (const width of [1600, 390, 320]) {
    await page.setViewportSize({ width, height: width === 320 ? 480 : 900 });
    for (const colorScheme of ['light', 'dark'] as const) {
      await page.emulateMedia({ colorScheme });
      await page.goto('/en/guide');
      await page.getByTestId('guide.search.trigger').filter({ visible: true }).click();
      const input = page.getByTestId('guide.search.input');
      await input.fill('HTTP');
      const dialog = page.getByRole('dialog');
      const bounds = await dialog.boundingBox();
      if (!bounds) throw new Error('Search dialog has no bounds.');
      expect(bounds.x).toBeGreaterThanOrEqual(16);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(width - 16);
      expect(bounds.y).toBeGreaterThanOrEqual(16);
      expect(bounds.y + bounds.height).toBeLessThanOrEqual((width === 320 ? 480 : 900) - 16);
      const list = page.getByRole('listbox');
      expect(await list.evaluate((element) => element.scrollHeight > element.clientHeight)).toBe(
        true,
      );
      await list.hover();
      await page.mouse.wheel(0, 350);
      await expect.poll(() => list.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);
      await input.focus();
      await input.press('ArrowUp');
      await expect(
        page.locator('[data-automation-id="guide.search.result"][aria-selected="true"]'),
      ).toBeInViewport();
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(
        false,
      );
      await input.press('Escape');
    }
  }
});
