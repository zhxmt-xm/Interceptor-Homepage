import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer, type ViteDevServer } from 'vite';

let server: ViteDevServer;
let cache: string;
let GuideLink: typeof import('../../src/features/guide/GuideLink').default;

test.beforeAll(async () => {
  cache = await mkdtemp(path.join(os.tmpdir(), 'interceptor-guide-link-'));
  server = await createServer({
    root: process.cwd(),
    cacheDir: cache,
    logLevel: 'error',
    server: { middlewareMode: true, hmr: false },
  });
  GuideLink = (await server.ssrLoadModule('/src/features/guide/GuideLink.tsx')).default;
});

test.afterAll(async () => {
  await server?.close();
  if (cache) {
    await rm(cache, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
});

test('current outline links expose location semantics without changing their fragment', () => {
  const html = renderToStaticMarkup(
    createElement(
      GuideLink,
      {
        href: '#navigation',
        'aria-current': 'location',
      },
      'Section',
    ),
  );
  expect(html).toContain('aria-current="location"');
  expect(html).toContain('href="#navigation"');
  expect(html).not.toContain('target=');
});

test('ordinary guide links retain their existing navigation behavior', () => {
  for (const href of ['#navigation', '/guide/capture#http2', '/en/guide/capture#http2']) {
    const html = renderToStaticMarkup(createElement(GuideLink, { href }, 'Section'));
    expect(html).toContain(`href="${href}"`);
    expect(html).not.toContain('aria-current=');
    expect(html).not.toContain('target=');
  }
  const external = renderToStaticMarkup(
    createElement(
      GuideLink,
      {
        href: 'https://example.test/guide',
      },
      'External',
    ),
  );
  expect(external).toContain('target="_blank"');
  expect(external).toContain('rel="noopener noreferrer"');
});

test('named guide anchors remain non-interactive', () => {
  const html = renderToStaticMarkup(createElement(GuideLink, { id: 'guide-anchor-navigation' }));
  expect(html).toMatch(/^<span /);
  expect(html).toContain('id="guide-anchor-navigation"');
  expect(html).not.toContain('href=');
  expect(html).not.toContain('aria-current=');
});
