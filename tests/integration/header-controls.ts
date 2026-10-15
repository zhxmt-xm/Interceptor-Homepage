import type { Page } from '@playwright/test';

export function getPreferenceTrigger(page: Page, name: 'theme' | 'language') {
  const id = name === 'theme' ? 'homepage.theme.toggle' : 'homepage.language';
  return page.locator(
    `button[data-automation-id="${id}"], [role="menuitem"]:has([data-automation-id="${id}"])`,
  );
}

export function getPreferenceOptions(page: Page, name: 'theme' | 'language') {
  const firstChoice = name === 'theme' ? 'system' : 'zh';
  return page
    .getByTestId(`homepage.${name}.${firstChoice}`)
    .locator('xpath=ancestor::*[@role="menu"][1]');
}

export async function showHeaderControls(page: Page) {
  if (!(await page.locator('#header-actions-menu').isVisible())) {
    await page.getByTestId('homepage.menu').click();
  }
}

export async function toggleHeaderLanguage(page: Page) {
  const next = (await page.locator('html').getAttribute('lang')) === 'en' ? 'zh' : 'en';
  await showHeaderControls(page);
  await getPreferenceTrigger(page, 'language').click();
  await page.getByTestId(`homepage.language.${next}`).click();
}
