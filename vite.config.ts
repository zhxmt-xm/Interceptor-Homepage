import type { IncomingMessage, ServerResponse } from 'node:http';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { antdStylePolicy } from './scripts/antd-style-policy.ts';
import { guideContent } from './scripts/guide-content.ts';
import { GUIDE_ROUTES } from './src/content/guidebook.ts';

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
      for (const route of routes) {
        this.emitFile({
          type: 'asset',
          fileName: `${route.slice(1)}/index.html`,
          source: index.source,
        });
      }
    },
  };
}

export default defineConfig({
  appType: 'mpa',
  plugins: [react(), guideContent(), guidePages(), antdStylePolicy()],
  server: {
    warmup: { clientFiles: ['./src/features/guide/GuidePage.tsx'] },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
