import { mkdir, writeFile } from 'node:fs/promises';
import { expect, type Locator, type Page, type TestInfo, test } from '@playwright/test';

async function loadNavigationFonts(page: Page) {
  await page.evaluate(async () => {
    for (const weight of [400, 450, 500, 600, 700]) {
      const faces = await document.fonts.load(`${weight} 16px "Inter Variable"`, 'Interceptor');
      if (!faces.length || faces.some((face) => face.status !== 'loaded')) {
        throw new Error(`Navigation font is unavailable: Inter Variable ${weight}`);
      }
    }
  });
}

async function clickAndSampleScroll(page: Page, link: Locator) {
  await link.scrollIntoViewIfNeeded();
  const bounds = await link.boundingBox();
  if (!bounds) throw new Error('Anchor link is not visible');
  const samples = page.evaluate(
    () =>
      new Promise<number[]>((resolve) => {
        const positions = [window.scrollY];
        const start = performance.now();
        let stableFrames = 0;
        let moved = false;
        const sample = (time: number) => {
          const position = window.scrollY;
          moved ||= position !== positions[0];
          stableFrames = position === positions.at(-1) ? stableFrames + 1 : 0;
          positions.push(position);
          if ((moved && stableFrames >= 6) || time - start >= 3000) resolve(positions);
          else requestAnimationFrame(sample);
        };
        requestAnimationFrame(sample);
      }),
  );
  await page.mouse.click(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  return samples;
}

function expectScrollBehavior(positions: number[], reducedMotion: boolean) {
  const start = positions[0];
  const end = positions.at(-1);
  if (end === undefined) throw new Error('No scroll samples captured');
  expect(Math.abs(end - start)).toBeGreaterThan(100);
  const minimum = Math.min(start, end);
  const maximum = Math.max(start, end);
  const intermediate = positions.filter(
    (position) => position > minimum + 20 && position < maximum - 20,
  );
  if (reducedMotion) expect(intermediate).toHaveLength(0);
  else expect(intermediate.length).toBeGreaterThan(1);
}

async function saveScrollEvidence(testInfo: TestInfo, name: string, positions: number[]) {
  await mkdir(testInfo.outputDir, { recursive: true });
  const path = testInfo.outputPath(`${name}.json`);
  await writeFile(path, JSON.stringify(positions), 'utf8');
  await testInfo.attach(name, { path, contentType: 'application/json' });
}

for (const reducedMotion of [false, true]) {
  test(`homepage anchors animate and repeat while respecting reduced motion: ${reducedMotion}`, async ({
    page,
  }, testInfo) => {
    await page.emulateMedia({ reducedMotion: reducedMotion ? 'reduce' : 'no-preference' });
    await page.goto('/');
    await loadNavigationFonts(page);
    const workspace = page.locator('main a[href="/#workspace"]');
    for (const repeat of [false, true]) {
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      const positions = await clickAndSampleScroll(page, workspace);
      await saveScrollEvidence(testInfo, `home-${repeat ? 'repeat' : 'first'}`, positions);
      expectScrollBehavior(positions, reducedMotion);
      await expect(page).toHaveURL(/#workspace$/);
      const targetTop = await page
        .locator('#workspace')
        .evaluate((element) => element.getBoundingClientRect().top);
      const headerBottom = await page
        .locator('header')
        .evaluate((element) => element.getBoundingClientRect().bottom);
      expect(targetTop).toBeGreaterThanOrEqual(headerBottom);
    }
  });

  test(`guide anchors follow the same native scroll policy: ${reducedMotion}`, async ({
    page,
  }, testInfo) => {
    await page.emulateMedia({ reducedMotion: reducedMotion ? 'reduce' : 'no-preference' });
    await page.goto('/en/guide/composer');
    await expect(page.getByTestId('guide.article')).toBeVisible();
    await loadNavigationFonts(page);
    const anchor = page.getByTestId('guide.outline').getByRole('link').nth(1);
    const href = await anchor.getAttribute('href');
    if (!href) throw new Error('Guide anchor destination missing');
    const positions = await clickAndSampleScroll(page, anchor);
    await saveScrollEvidence(testInfo, 'guide-scroll', positions);
    expectScrollBehavior(positions, reducedMotion);
    await expect(page).toHaveURL(new URL(href, page.url()).href);
    expect(new URL(page.url()).pathname).toBe('/en/guide/composer');
    await expect
      .poll(() =>
        page.evaluate(() => {
          const fragment = decodeURIComponent(window.location.hash.slice(1));
          const target =
            document.getElementById(`guide-anchor-${fragment}`) ??
            document.getElementById(`guide-heading-${fragment}`);
          if (!target) throw new Error('Guide anchor target missing');
          const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
          const margin = parseFloat(getComputedStyle(target).scrollMarginTop);
          return Math.abs(target.getBoundingClientRect().top - padding - margin);
        }),
      )
      .toBeLessThanOrEqual(1);
  });
}
