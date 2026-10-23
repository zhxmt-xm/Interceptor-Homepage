import type { IncomingMessage, ServerResponse } from 'node:http';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { guideContent } from './scripts/guide-content.ts';
import {
  GUIDE_CHAPTERS,
  GUIDE_ROUTES,
  GUIDE_UI,
  type GuidePageId,
} from './src/content/guidebook.ts';

const siteOrigin = 'https://www.interceptor.cn';

type StaticMetadata = {
  title: string;
  description: string;
  url: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceMetadataAttribute(
  html: string,
  marker: string,
  attribute: 'content' | 'href',
  value: string,
): string {
  const pattern = new RegExp(`(<[^>]+data-page-metadata="${marker}"[^>]+${attribute}=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`Homepage metadata marker is missing: ${marker}`);
  return html.replace(
    pattern,
    (_match: string, prefix: string, suffix: string) => `${prefix}${escapeHtml(value)}${suffix}`,
  );
}

function replaceMetadataTitle(html: string, title: string): string {
  const pattern = /(<title data-page-metadata="title">)[^<]*(<\/title>)/;
  if (!pattern.test(html)) throw new Error('Homepage title metadata marker is missing.');
  return html.replace(
    pattern,
    (_match: string, prefix: string, suffix: string) => `${prefix}${escapeHtml(title)}${suffix}`,
  );
}

function renderMetadata(html: string, metadata: StaticMetadata): string {
  let result = replaceMetadataTitle(html, metadata.title);
  result = replaceMetadataAttribute(result, 'description', 'content', metadata.description);
  result = replaceMetadataAttribute(result, 'canonical', 'href', metadata.url);
  result = replaceMetadataAttribute(result, 'og-title', 'content', metadata.title);
  result = replaceMetadataAttribute(result, 'og-description', 'content', metadata.description);
  result = replaceMetadataAttribute(result, 'og-url', 'content', metadata.url);
  result = replaceMetadataAttribute(result, 'twitter-title', 'content', metadata.title);
  return replaceMetadataAttribute(result, 'twitter-description', 'content', metadata.description);
}

function guideMetadata(page: GuidePageId, path: string): StaticMetadata {
  const chapter = GUIDE_CHAPTERS.find((candidate) => candidate.slug === page);
  if (page !== 'overview' && !chapter) throw new Error(`Guide chapter is missing: ${page}`);
  return {
    title:
      page === 'overview'
        ? `${GUIDE_UI.zh.title} — Interceptor`
        : `${chapter?.label.zh} · ${GUIDE_UI.zh.title} — Interceptor`,
    description: chapter?.summary.zh ?? GUIDE_UI.zh.overviewSummary,
    url: new URL(path, siteOrigin).href,
  };
}

function sitemap(paths: readonly string[]): string {
  const urls = ['/', ...paths]
    .map((path) => `  <url><loc>${new URL(path, siteOrigin).href}</loc></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
function guidePages(): Plugin {
  const routes = new Set(GUIDE_ROUTES.map((route) => route.path));
  const rewriteGuideRequest =
    (preview: boolean) =>
    (request: IncomingMessage, _response: ServerResponse, next: () => void): void => {
      const url = new URL(request.url ?? '/', 'http://localhost');
      const route = url.pathname.replace(/\/$/, '');
      if ((request.method === 'GET' || request.method === 'HEAD') && routes.has(route)) {
        request.url = `${preview ? route : ''}/index.html${url.search}`;
      }
      next();
    };
  return {
    name: 'guidebook-static-pages',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use(rewriteGuideRequest(false));
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewriteGuideRequest(true));
    },
    generateBundle(_options, bundle) {
      const index = bundle['index.html'];
      if (!index || index.type !== 'asset') throw new Error('Homepage HTML output is missing.');
      const source =
        typeof index.source === 'string' ? index.source : new TextDecoder().decode(index.source);
      for (const route of GUIDE_ROUTES) {
        this.emitFile({
          type: 'asset',
          fileName: `${route.path.slice(1)}/index.html`,
          source: renderMetadata(source, guideMetadata(route.page, route.path)),
        });
      }
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemap(GUIDE_ROUTES.map((route) => route.path)),
      });
    },
  };
}

export default defineConfig({
  appType: 'mpa',
  plugins: [react(), guideContent(), guidePages()],
  server: {
    warmup: { clientFiles: ['./src/features/guide/GuidePage.tsx'] },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
