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

test('static pages publish route metadata and discovery files', async ({ request }) => {
  const pages = [
    {
      path: '/',
      title: 'Interceptor — 看清每个请求',
      description:
        'Interceptor 是面向 macOS 与 Windows 的 HTTP(S) 调试代理，集流量捕获、规则改写、断点、请求重放与可选 AI 调试于一个工作台。',
    },
    {
      path: '/guide/capture',
      title: 'Capture · 使用指南 — Interceptor',
      description: '从找到一条请求，到理解它的正文、时序和协议。先看清发生了什么，再决定下一步。',
    },
    {
      path: '/en/guide/capture',
      title: 'Capture · User Guide — Interceptor',
      description:
        'Find a request and understand its body, timing and protocol before deciding what to do next.',
    },
  ];

  for (const metadata of pages) {
    const response = await request.get(metadata.path);
    expect(response.status()).toBe(200);
    const html = await response.text();
    const url = new URL(metadata.path, 'https://www.interceptor.cn').href;
    expect(html).toContain(`<title data-page-metadata="title">${metadata.title}</title>`);
    expect(html).toContain(`data-page-metadata="description" content="${metadata.description}"`);
    expect(html).toContain(`data-page-metadata="canonical" href="${url}"`);
    expect(html).toContain(`data-page-metadata="og-url" content="${url}"`);
  }

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const sitemapXml = await sitemap.text();
  for (const path of [
    '/',
    '/guide',
    '/guide/capture',
    '/guide/troubleshooting',
    '/en/guide',
    '/en/guide/capture',
    '/en/guide/troubleshooting',
  ]) {
    expect(sitemapXml).toContain(`<loc>${new URL(path, 'https://www.interceptor.cn').href}</loc>`);
  }

  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain('Sitemap: https://www.interceptor.cn/sitemap.xml');
});

test('legacy English guide URLs use the static English route and metadata', async ({ page }) => {
  await page.goto('/guide/capture?lang=en');
  await expect(page).toHaveURL('/en/guide/capture');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://www.interceptor.cn/en/guide/capture',
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    'content',
    'https://www.interceptor.cn/en/guide/capture',
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'Capture · User Guide — Interceptor',
  );
});

test('website loads bundled fonts without requesting Google Fonts', async ({ page }) => {
  const externalFontRequests: string[] = [];
  page.on('request', (request) => {
    if (/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//.test(request.url())) {
      externalFontRequests.push(request.url());
    }
  });

  await page.goto('/');
  await page.evaluate(async () => {
    await Promise.all([
      document.fonts.load('400 16px "Inter Variable"'),
      document.fonts.load('400 16px "JetBrains Mono Variable"'),
    ]);
  });

  expect(await page.evaluate(() => document.fonts.check('400 16px "Inter Variable"'))).toBe(true);
  expect(
    await page.evaluate(() => document.fonts.check('400 16px "JetBrains Mono Variable"')),
  ).toBe(true);
  expect(externalFontRequests).toEqual([]);
});
