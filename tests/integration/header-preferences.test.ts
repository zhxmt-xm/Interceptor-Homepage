import { expect, test } from '@playwright/test';
import { getPreferenceOptions, getPreferenceTrigger, showHeaderControls } from './header-controls';

for (const width of [1600, 390]) {
  for (const route of ['/', '/en/guide/composer?source=header-check#top']) {
    test(`language changes only after an explicit choice at ${width}px on ${route}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const initial = route === '/' ? 'zh' : 'en';
      const next = initial === 'zh' ? 'en' : 'zh';
      const originalUrl = page.url();
      await showHeaderControls(page);
      await getPreferenceTrigger(page, 'language').click();
      await expect(page.locator('html')).toHaveAttribute('lang', initial === 'zh' ? 'zh-CN' : 'en');
      await expect(page).toHaveURL(originalUrl);
      await expect(page.getByTestId('homepage.language.zh')).toHaveText('简体中文');
      await expect(page.getByTestId('homepage.language.en')).toHaveText('English');
      await expect(page.getByTestId(`homepage.language.${initial}`)).toHaveAttribute(
        'aria-checked',
        'true',
      );
      await page.getByTestId(`homepage.language.${initial}`).click();
      await expect(page).toHaveURL(originalUrl);

      await showHeaderControls(page);
      await getPreferenceTrigger(page, 'language').click();
      await page.getByTestId(`homepage.language.${next}`).click();
      await expect(page.locator('html')).toHaveAttribute('lang', next === 'zh' ? 'zh-CN' : 'en');
      if (route !== '/') {
        const url = new URL(page.url());
        expect(url.pathname).toBe('/guide/composer');
        expect(url.hash).toBe('#top');
        expect(url.searchParams.get('source')).toBe('header-check');
        expect(url.searchParams.get('lang')).toBeNull();
      }
      await showHeaderControls(page);
      await getPreferenceTrigger(page, 'language').click();
      await expect(page.getByTestId(`homepage.language.${next}`)).toHaveAttribute(
        'aria-checked',
        'true',
      );
      await page.keyboard.press('Escape');
    });
  }
}

for (const width of [1600, 841]) {
  test(`desktop preference triggers switch directly without a late dismissal at ${width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/guide/composer');
    const theme = getPreferenceTrigger(page, 'theme');
    const language = getPreferenceTrigger(page, 'language');
    const themeOptions = getPreferenceOptions(page, 'theme');
    const languageOptions = getPreferenceOptions(page, 'language');
    await theme.click();
    await expect(themeOptions).toBeVisible();

    for (let switchCount = 0; switchCount < 3; switchCount += 1) {
      await language.click();
      await expect(themeOptions).toBeHidden();
      await expect(languageOptions).toBeVisible();
      await expect(language).toHaveAttribute('aria-expanded', 'true');
      await expect(page.getByTestId('homepage.language.zh')).toBeFocused();
      await page.keyboard.press('ArrowDown');
      await expect(page.getByTestId('homepage.language.en')).toBeFocused();
      await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
      await theme.click();
      await expect(languageOptions).toBeHidden();
      await expect(themeOptions).toBeVisible();
      await expect(theme).toHaveAttribute('aria-expanded', 'true');
      await expect(page.getByTestId('homepage.theme.system')).toBeFocused();
    }

    await language.click();
    await page.screenshot({ path: testInfo.outputPath('direct-language-switch.png') });
    await page.keyboard.press('Escape');
    await expect(languageOptions).toBeHidden();
    await expect(language).toBeFocused();
    await language.press('Enter');
    await expect(languageOptions).toBeVisible();
    await language.click();
    await expect(languageOptions).toBeHidden();
    await theme.click();
    await page.mouse.click(5, 500);
    await expect(themeOptions).toBeHidden();
  });
}

test('compact preferences are exclusive and keyboard focus does not change the selection', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto('/');
  await showHeaderControls(page);
  const theme = getPreferenceTrigger(page, 'theme');
  const language = getPreferenceTrigger(page, 'language');
  await theme.click();
  await expect(page.getByTestId('homepage.theme.system')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByTestId('homepage.theme.light')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByTestId('homepage.theme.dark')).toBeFocused();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(theme).toBeFocused();
  await expect(page.locator('#header-actions-menu')).toBeVisible();

  await theme.click();
  await language.click();
  await expect(theme).toHaveAttribute('aria-expanded', 'false');
  await expect(language).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByTestId('homepage.theme.dark')).toBeHidden();
  await expect(page.getByTestId('homepage.language.zh')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(language).toBeFocused();
  await expect(page.locator('#header-actions-menu')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#header-actions-menu')).toBeHidden();
  await expect(page.getByTestId('homepage.menu')).toBeFocused();
});

test('compact popover stays near its trigger and inside clicks do not dismiss it', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 700 });
  await page.goto('/');
  const trigger = page.getByTestId('homepage.menu');
  const triggerBounds = await trigger.boundingBox();
  if (!triggerBounds) throw new Error('Actions trigger missing');
  await trigger.click();
  const popover = page.locator('#header-actions-menu');
  const bounds = await popover.boundingBox();
  if (!bounds) throw new Error('Actions popover missing');
  expect.soft(bounds.y - triggerBounds.y - triggerBounds.height).toBeCloseTo(8, 1);
  await page.mouse.click(bounds.x + 6, bounds.y + 6);
  await expect(popover).toBeVisible();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await getPreferenceTrigger(page, 'language').click();
  await page.mouse.click(bounds.x + 6, bounds.y + 6);
  await expect(popover).toBeVisible();
  await expect(page.getByTestId('homepage.language.en')).toBeVisible();
  await page.mouse.click(5, 480);
  await expect(popover).toBeHidden();
});

test('preference menus separate every option by the shared 4px gap', async ({ page }) => {
  await page.goto('/');
  for (const width of [1600, 390]) {
    await page.setViewportSize({ width, height: 700 });
    for (const name of ['theme', 'language'] as const) {
      await showHeaderControls(page);
      await getPreferenceTrigger(page, name).click();
      const bounds = await getPreferenceOptions(page, name)
        .getByRole('menuitemradio')
        .evaluateAll((elements) =>
          elements.map((element) => {
            const rect = element.getBoundingClientRect();
            return { top: rect.top, bottom: rect.bottom, height: rect.height };
          }),
        );
      expect(bounds).toHaveLength(name === 'theme' ? 3 : 2);
      for (let index = 1; index < bounds.length; index += 1) {
        expect(bounds[index].top - bounds[index - 1].bottom).toBe(4);
        expect(bounds[index].height).toBe(40);
      }
      await page.keyboard.press('Escape');
    }
  }
});

test('expanded preferences remain reachable in a 260 by 180 window', async ({ page }) => {
  await page.setViewportSize({ width: 260, height: 180 });
  await page.goto('/');
  await showHeaderControls(page);
  await getPreferenceTrigger(page, 'language').click();
  const english = page.getByTestId('homepage.language.en');
  await english.scrollIntoViewIfNeeded();
  const bounds = await english.boundingBox();
  if (!bounds) throw new Error('Language option missing');
  expect(bounds.y).toBeGreaterThanOrEqual(72);
  expect(bounds.y + bounds.height).toBeLessThanOrEqual(180);
  await english.click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#header-actions-menu')).toBeHidden();
  await expect(page.getByTestId('homepage.menu')).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(260);
});
