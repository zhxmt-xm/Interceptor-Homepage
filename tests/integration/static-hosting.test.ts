import { expect, test } from '@playwright/test';

test('static pages do not inject custom browser security headers', async ({ request }) => {
  const removedHeaders = [
    'content-security-policy',
    'x-frame-options',
    'permissions-policy',
    'referrer-policy',
    'x-content-type-options',
  ];

  for (const pathname of ['/', '/guide', '/guide/composer']) {
    const response = await request.get(pathname);
    expect(response.status()).toBe(200);
    const headers = response.headers();
    for (const name of removedHeaders) {
      expect.soft(headers[name], `${name} on ${pathname}`).toBeUndefined();
    }
  }
});

test('hashed assets retain immutable caching without applying it to HTML', async ({ request }) => {
  const entry = await request.get('/');
  expect(entry.status()).toBe(200);
  expect(entry.headers()['cache-control']).not.toContain('immutable');
  const html = await entry.text();
  const scriptPath = html.match(/<script\b[^>]*\bsrc="([^"]+)"/)?.[1];
  if (!scriptPath) throw new Error('The production entry must include its JavaScript bundle.');

  const script = await request.get(scriptPath);
  expect(script.status()).toBe(200);
  expect(script.headers()['cache-control']).toBe('public, max-age=31536000, immutable');
});

test('guide chapters can be read and navigated from a cross-origin iframe', async ({
  page,
  baseURL,
}) => {
  if (!baseURL) throw new Error('The static website URL must be configured.');
  expect(await page.evaluate(() => location.origin)).toBe('null');
  const chapterUrl = new URL('/guide/composer', baseURL).href;
  await page.setContent(
    `<iframe title="Guidebook" src="${chapterUrl}" width="1200" height="800"></iframe>`,
  );

  const guide = page.frameLocator('iframe');
  const article = guide.getByTestId('guide.article');
  await expect(article).toBeVisible();
  await guide.getByTestId('guide.chapter.capture').click();
  await expect.poll(() => article.evaluate(() => location.pathname)).toBe('/guide/capture');
  await expect(guide.locator('h1')).toBeVisible();
});
