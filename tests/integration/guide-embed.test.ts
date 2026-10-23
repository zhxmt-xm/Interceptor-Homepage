import { expect, test } from '@playwright/test';

test('desktop embed removes website chrome and preserves the embed query while navigating', async ({
  page,
}) => {
  await page.goto('/guide?embed=desktop');
  await expect(page.locator('header')).toHaveCount(0);
  await expect(page.locator('footer')).toHaveCount(0);
  await expect(page.getByTestId('guide.root')).toBeVisible();

  await page.getByTestId('guide.chapter.capture').click();
  await expect(page).toHaveURL(/\/guide\/capture\?embed=desktop$/);
  await expect(page.getByTestId('guide.article')).toBeVisible();
});

test('desktop bridge opens existing search and applies bounded preferences', async ({ page }) => {
  await page.goto('/guide/capture?embed=desktop');

  await page.evaluate(() => {
    const data = {
      source: 'interceptor-desktop-guidebook',
      type: 'sync-preferences',
      theme: 'dark',
      locale: 'en',
    };
    window.dispatchEvent(
      new MessageEvent('message', {
        data,
        origin: 'https://untrusted.example',
        source: window.parent,
      }),
    );
    window.dispatchEvent(
      new MessageEvent('message', {
        data,
        origin: 'interceptor://app',
        source: window.parent,
      }),
    );
  });
  await expect(page).toHaveURL(/\/en\/guide\/capture\?embed=desktop$/);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByTestId('guide.article')).toHaveAttribute('lang', 'en');

  await page.evaluate(() => {
    window.dispatchEvent(
      new MessageEvent('message', {
        data: {
          source: 'interceptor-desktop-guidebook',
          type: 'open-search',
        },
        origin: 'interceptor://app',
        source: window.parent,
      }),
    );
  });
  await expect(page.getByTestId('guide.search.dialog')).toBeVisible();
  await expect(page.getByTestId('guide.search.input')).toBeFocused();
});
