import { expect, type Page, test } from '@playwright/test';
import { getPreferenceTrigger, showHeaderControls } from './header-controls';

async function chooseTheme(page: Page, preference: 'system' | 'light' | 'dark') {
  await showHeaderControls(page);
  await getPreferenceTrigger(page, 'theme').click();
  await page.getByTestId(`homepage.theme.${preference}`).click();
}

for (const theme of ['light', 'dark'] as const) {
  test(`starts with the ${theme} browser theme and pairs every feature with its image`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: theme });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
    await expect(page.locator('#features article')).toHaveCount(6);
    await expect(page.locator('#workspace input[type="radio"]')).toHaveCount(0);
    await expect(page.getByTestId('homepage.overview.image')).toHaveAttribute(
      'src',
      `/media/features/capture-${theme}.png`,
    );
    for (const feature of ['capture', 'rules', 'breakpoints', 'composer', 'agent', 'mcp']) {
      const section = page.getByTestId(`homepage.feature.${feature}`);
      await expect(section).toBeVisible();
      await expect(section.getByRole('heading')).toHaveCount(1);
      await expect(section.getByRole('listitem')).toHaveCount(3);
      const image = section.getByRole('img');
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveAttribute('src', `/media/features/${feature}-${theme}.png`);
      await expect(section.getByRole('link')).toHaveAttribute(
        'href',
        `/media/features/${feature}-${theme}.png`,
      );
      await expect
        .poll(() =>
          image.evaluate(
            (element: HTMLImageElement) => element.complete && element.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
  });
}

test('manual preference persists and System resumes live browser-theme following', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await chooseTheme(page, 'dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#0c0d11');

  await page.emulateMedia({ colorScheme: 'dark' });
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await chooseTheme(page, 'system');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByTestId('homepage.feature.agent').getByRole('img')).toHaveAttribute(
    'src',
    '/media/features/agent-dark.png',
  );
  await page.reload();
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('theme choices are keyboard accessible and coexist with narrow-screen navigation', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/');
  await showHeaderControls(page);
  const trigger = getPreferenceTrigger(page, 'theme');
  await trigger.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('homepage.theme.system')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByTestId('homepage.theme.light')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(trigger).toBeFocused();

  await expect(page.locator('#header-actions-menu')).toBeVisible();
  await expect(page.locator('#main-navigation')).toBeVisible();
  await trigger.click();
  await expect(page.locator('#header-actions-menu')).toBeVisible();
  await expect(page.locator('#main-navigation')).toBeVisible();
  await page.mouse.click(8, 400);
  await expect(page.locator('#header-actions-menu')).toBeHidden();
  await page.keyboard.press('Escape');
  await expect(page.locator('#header-actions-menu')).toBeHidden();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
});

test('theme changes synchronize between two open website tabs', async ({ page, context }) => {
  await page.goto('/');
  const secondPage = await context.newPage();
  await secondPage.goto('/');
  await chooseTheme(page, 'dark');
  await expect(secondPage.locator('html')).toHaveAttribute('data-theme', 'dark');
  await chooseTheme(secondPage, 'light');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await secondPage.close();
});

test('blocked browser storage is reported while the theme control stays usable', async ({
  page,
}) => {
  const warnings: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'warning') warnings.push(message.text());
  });
  await page.addInitScript(() => {
    const getItem = Storage.prototype.getItem;
    const setItem = Storage.prototype.setItem;
    Storage.prototype.getItem = function (key) {
      if (key === 'interceptor.homepage.theme') throw new DOMException('Blocked', 'SecurityError');
      return getItem.call(this, key);
    };
    Storage.prototype.setItem = function (key, value) {
      if (key === 'interceptor.homepage.theme')
        throw new DOMException('Blocked', 'QuotaExceededError');
      setItem.call(this, key, value);
    };
  });
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await chooseTheme(page, 'dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(
    warnings.some((message) => message.includes('[theme] Saved preferences are unavailable')),
  ).toBe(true);
  expect(
    warnings.some((message) => message.includes('[theme] Preference could not be saved')),
  ).toBe(true);
});
