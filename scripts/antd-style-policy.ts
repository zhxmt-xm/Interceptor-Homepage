import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { Button, ConfigProvider, Menu, Popover, Tooltip } from 'antd';
import { createElement, Fragment, type ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Plugin } from 'vite';
import { HEADER_THEME } from '../src/theme/components.ts';

export function antdStylePolicy(): Plugin {
  return {
    name: 'antd-style-policy',
    apply: 'build',
    async writeBundle(options) {
      if (!options.dir) throw new Error('Ant Design style policy requires a build directory.');
      const cache = createCache();
      const renderStyles = (children: ReactNode) =>
        renderToStaticMarkup(
          createElement(
            StyleProvider,
            { cache },
            createElement(ConfigProvider, { theme: HEADER_THEME }, children),
          ),
        );
      renderStyles(
        createElement(
          Fragment,
          null,
          createElement(Button, { type: 'primary' }, 'Download'),
          createElement(Menu, { items: [] }),
          createElement(Popover, { content: '' }, createElement('button')),
          createElement(Tooltip, { title: '' }, createElement('button')),
        ),
      );
      const styles = extractStyle(cache);
      const hashes = new Set(
        [...styles.matchAll(/<style([^>]*)>([\s\S]*?)<\/style>/g)]
          // The SSR hydration cache map is not injected by the client.
          .filter((match) => !match[1].includes('data-ant-cssinjs-cache-path'))
          .map((match) => match[2])
          .map((css) => `'sha256-${createHash('sha256').update(css, 'utf8').digest('base64')}'`),
      );
      if (!hashes.size) throw new Error('Ant Design style extraction produced no CSP hashes.');
      const path = join(options.dir, '_headers');
      const headers = await readFile(path, 'utf8');
      if (!/\bstyle-src [^;]+;/.test(headers)) {
        throw new Error('Static response headers are missing a style-src policy.');
      }
      const updated = headers.replace(/\bstyle-src ([^;]+);/, (_, sources: string) => {
        return `style-src ${sources} ${[...hashes].join(' ')};`;
      });
      if (updated.split('\n').some((line) => line.length > 2000)) {
        throw new Error('Static response header exceeds the 2000-character line limit.');
      }
      await writeFile(path, updated, 'utf8');
    },
  };
}
