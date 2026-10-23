import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function highlightLabels(imagePath: string): string[] {
  const manifest: unknown = JSON.parse(
    readFileSync(path.join(path.dirname(imagePath), 'manifest.json'), 'utf8'),
  );
  if (!isRecord(manifest) || !Array.isArray(manifest.steps)) {
    throw new Error(`Image provenance is missing its steps: ${imagePath}`);
  }
  const step = manifest.steps.find(
    (step: unknown) => isRecord(step) && step.image === path.basename(imagePath),
  );
  if (!isRecord(step) || !Array.isArray(step.highlights) || step.highlights.length === 0) {
    throw new Error(`Annotated image is missing its labels: ${imagePath}`);
  }
  return step.highlights.map((highlight: unknown) => {
    if (
      !isRecord(highlight) ||
      typeof highlight.label !== 'string' ||
      !/^[1-9]\d*$/.test(highlight.label)
    ) {
      throw new Error(`Invalid image annotation label: ${imagePath}`);
    }
    return highlight.label;
  });
}

for (const language of ['zh-CN', 'en']) {
  test(`every numbered image region is explained in its own operation step (${language})`, async ({
    page,
  }) => {
    const directory = path.resolve('guidebook', language);
    let checked = 0;
    for (const file of readdirSync(directory).filter((file) => file.endsWith('.md'))) {
      const source = readFileSync(path.join(directory, file), 'utf8');
      const images = [...source.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
      if (!images.some((image) => image.endsWith('.annotated.png'))) continue;
      await page.goto(`${language === 'en' ? '/en' : ''}/guide/${file.slice(0, -3)}`);
      const article = page.getByTestId('guide.article');
      await expect(article).toBeVisible();
      const renderedImages = article.locator('img');
      await expect(renderedImages).toHaveCount(images.length);
      const operationDescriptions = await renderedImages.evaluateAll((elements) =>
        elements.map((element) => element.closest('li')?.textContent ?? null),
      );
      for (const [index, image] of images.entries()) {
        if (!image.endsWith('.annotated.png')) continue;
        const labels = highlightLabels(path.resolve(directory, image));
        const operationDescription = operationDescriptions[index];
        if (typeof operationDescription !== 'string') {
          throw new Error(`Annotated image is outside an operation step: ${file}: ${image}`);
        }
        for (const label of labels) {
          const description = new RegExp(
            language === 'en' ? `\\bbox\\s+${label}\\b` : `红框\\s*${label}(?!\\d)`,
            'i',
          );
          expect(operationDescription, `${file}: ${image}, box ${label}`).toMatch(description);
          checked += 1;
        }
      }
    }
    expect(checked).toBeGreaterThan(0);
  });
}
