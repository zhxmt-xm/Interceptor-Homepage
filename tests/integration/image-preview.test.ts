import { expect, test } from '@playwright/test';
import { toggleHeaderLanguage } from './header-controls';

for (const locale of ['zh', 'en']) {
  test(`content images open in the current page and restore reading position (${locale})`, async ({
    page,
    context,
  }) => {
    for (const route of ['/', '/guide/composer']) {
      await page.goto(route + (locale === 'en' && route !== '/' ? '?lang=en' : ''));
      if (locale === 'en' && route === '/') await toggleHeaderLanguage(page);
      for (const width of [1600, 390]) {
        await page.setViewportSize({ width, height: 900 });
        const image =
          route === '/'
            ? page.getByTestId('homepage.overview.image')
            : page.getByTestId('guide.article').locator('img').first();
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((element: HTMLImageElement) => element.decode());
        const trigger = image.locator('..');
        await trigger.focus();
        const before = await page.evaluate(() => ({
          url: location.href,
          scroll: scrollY,
          origin: performance.timeOrigin,
        }));
        const pages = context.pages().length;
        await page.keyboard.press('Enter');
        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();
        await expect(page.getByTestId('image.preview.image')).toHaveAttribute(
          'src',
          (await image.getAttribute('src')) ?? '',
        );
        expect(context.pages()).toHaveLength(pages);
        expect(page.url()).toBe(before.url);
        await page.getByTestId('image.preview.zoomIn').click();
        const previewImage = page.getByTestId('image.preview.image');
        const enlarged = await previewImage.boundingBox();
        if (!enlarged) throw new Error('The enlarged image is missing.');
        const center = { x: width / 2, y: 450 };
        await page.mouse.move(center.x, center.y);
        await page.mouse.down();
        await page.mouse.move(center.x + 60, center.y, { steps: 5 });
        await page.mouse.up();
        await expect.poll(async () => (await previewImage.boundingBox())?.x).not.toBe(enlarged.x);
        await page.getByTestId('image.preview.zoomOut').click();
        await page.keyboard.press('Escape');
        await expect(dialog).toHaveCount(0);
        await expect(trigger).toBeFocused();
        expect(await page.evaluate(() => scrollY)).toBe(before.scroll);
        expect(await page.evaluate(() => performance.timeOrigin)).toBe(before.origin);
        await trigger.press('Space');
        await expect(dialog).toBeVisible();
        await dialog
          .getByRole('button', { name: locale === 'en' ? 'Close image' : '关闭图片', exact: true })
          .click();
        await expect(dialog).toHaveCount(0);
        await expect(trigger).toBeFocused();
      }
    }
  });
}

test('browser history closes image preview without retaining an overlay on another chapter', async ({
  page,
}) => {
  await page.goto('/guide');
  await page.getByTestId('guide.chapter.composer').click();
  await page.getByTestId('guide.article').locator('img').first().locator('..').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/\/guide\/?$/);
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('all homepage feature images use the same in-page preview', async ({ page, context }) => {
  await page.goto('/');
  for (const feature of ['capture', 'rules', 'breakpoints', 'composer', 'agent', 'mcp']) {
    const image = page.getByTestId(`homepage.feature.${feature}`).locator('img');
    const trigger = image.locator('..');
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    await trigger.click();
    await expect(page.getByTestId('image.preview.image')).toHaveAttribute(
      'src',
      (await image.getAttribute('src')) ?? '',
    );
    expect(context.pages()).toHaveLength(1);
    await page.mouse.click(5, 100);
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(trigger).toBeFocused();
  }
});

test('an unavailable original reports an image error without leaving the guide', async ({
  page,
  context,
}) => {
  await page.route('**/media/features/capture-light.png', (route) => route.abort('failed'));
  await page.goto('/');
  await page.getByTestId('homepage.overview.image').locator('..').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByTestId('image.preview.error')).toBeVisible();
  expect(context.pages()).toHaveLength(1);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});
