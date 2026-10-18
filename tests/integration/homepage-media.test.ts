import { createHash } from 'node:crypto';
import { expect, test } from '@playwright/test';
import provenance from '../../docs/homepage-media.json' with { type: 'json' };
import { toggleHeaderLanguage } from './header-controls';

for (const theme of ['light', 'dark'] as const) {
  test(`homepage serves the original released App screenshots in ${theme}`, async ({ request }) => {
    for (const [file, sha256] of Object.entries(provenance.images)) {
      if (!file.endsWith(`-${theme}.png`)) continue;
      const response = await request.get(`/media/features/${file}`);
      expect(response.status()).toBe(200);
      const bytes = await response.body();
      expect.soft(createHash('sha256').update(bytes).digest('hex'), file).toBe(sha256);
      expect(bytes.readUInt32BE(16), file).toBe(provenance.imageWidth);
      expect(bytes.readUInt32BE(20), file).toBe(provenance.imageHeight);
    }
  });
}

for (const locale of ['zh-CN', 'en']) {
  test(`homepage identifies real demo media and preserves original-image links in ${locale}`, async ({
    page,
  }) => {
    await page.goto('/');
    if (locale === 'en') await toggleHeaderLanguage(page);
    const note = locale === 'zh-CN' ? '本地演示数据' : 'Local demo data';
    const previewLabel = /设计预览|设计图|design preview|design image|Interface design/i;

    for (const width of [1600, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ['light', 'dark'] as const) {
        await page.emulateMedia({ colorScheme: theme });
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
        for (const feature of [
          'overview',
          'capture',
          'rules',
          'breakpoints',
          'composer',
          'agent',
          'mcp',
        ]) {
          const area =
            feature === 'overview'
              ? page.locator('#workspace')
              : page.getByTestId(`homepage.feature.${feature}`);
          const image = area.locator('img');
          const file = `${feature === 'overview' ? 'capture' : feature}-${theme}.png`;
          await expect(area.locator('figcaption')).toContainText(note);
          await expect(area.locator('figcaption')).not.toContainText(previewLabel);
          await expect(area.locator('a')).not.toHaveAttribute('aria-label', previewLabel);
          await expect(image).not.toHaveAttribute('alt', previewLabel);
          await expect(image).toHaveAttribute('src', `/media/features/${file}`);
          await expect(area.locator('a')).toHaveAttribute('href', `/media/features/${file}`);
          await expect(area.locator('a')).toHaveAttribute('target', '_blank');
          await image.scrollIntoViewIfNeeded();
          await expect
            .poll(() =>
              image.evaluate((element: HTMLImageElement) =>
                element.complete ? [element.naturalWidth, element.naturalHeight] : [],
              ),
            )
            .toEqual([provenance.imageWidth, provenance.imageHeight]);
          const ratio = await image.evaluate((element: HTMLImageElement) => ({
            declared:
              Number(element.getAttribute('width')) / Number(element.getAttribute('height')),
            natural: element.naturalWidth / element.naturalHeight,
          }));
          expect(ratio.declared).toBe(ratio.natural);
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
          width,
        );
      }
    }
    await expect(page.getByTestId('homepage.feature.agent').locator('img')).toHaveAttribute(
      'alt',
      locale === 'zh-CN' ? /本地演示模型/ : /local demonstration model/,
    );
    await expect(page.getByTestId('homepage.feature.mcp').locator('img')).toHaveAttribute(
      'alt',
      locale === 'zh-CN' ? /不代表外部 Host 验收/ : /not external-host acceptance/,
    );
  });
}
