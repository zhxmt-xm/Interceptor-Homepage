import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Element, Nodes, Root } from 'hast';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { normalizePath, type Plugin } from 'vite';
import imageDimensions from '../guidebook/media/image-dimensions.json' with { type: 'json' };
import {
  GUIDE_CHAPTERS,
  GUIDE_LANGUAGE,
  type GuidePageId,
  guideHref,
} from '../src/content/guidebook.ts';
import type { Locale } from '../src/content/types.ts';
import type { GuideDocument, GuideHeading } from '../src/features/guide/interfaces.ts';

const dimensionsByFile: Record<string, number[]> = imageDimensions;

const modulePrefix = 'virtual:guidebook-content/';
const mediaModule = 'virtual:guidebook-media';
const locales: readonly Locale[] = ['zh', 'en'];
const pages: readonly GuidePageId[] = [
  'overview',
  ...GUIDE_CHAPTERS.map((chapter) => chapter.slug),
];
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSanitize, {
    ...defaultSchema,
    clobberPrefix: 'guide-anchor-',
    tagNames: [...(defaultSchema.tagNames ?? []), 'video', 'track'],
    attributes: {
      ...defaultSchema.attributes,
      video: ['src', 'poster', 'controls', 'preload', 'playsInline', 'lang', 'title'],
      track: ['src', 'kind', 'srcLang', 'label', 'default'],
    },
  })
  .use(rehypeSlug, { prefix: 'guide-heading-' });

function textContent(node: Nodes): string {
  if (node.type === 'text') return node.value;
  return 'children' in node ? node.children.map(textContent).join('') : '';
}

function explicitAnchor(node: Element): string | undefined {
  const id = node.properties.id;
  if (typeof id === 'string' && id.startsWith('guide-anchor-'))
    return id.slice('guide-anchor-'.length);
  for (const child of node.children) {
    if (child.type !== 'element') continue;
    const anchor = explicitAnchor(child);
    if (anchor) return anchor;
  }
  return undefined;
}

function outline(tree: Root): GuideHeading[] {
  const headings: GuideHeading[] = [];
  let previous: Element | undefined;
  for (const node of tree.children) {
    if (node.type !== 'element') continue;
    if (node.tagName === 'h2') {
      const id = previous && explicitAnchor(previous);
      const generatedId = node.properties.id;
      if (typeof generatedId !== 'string') throw new Error('Guidebook heading has no anchor.');
      headings.push({
        id: id ?? generatedId.replace(/^guide-heading-/, ''),
        title: textContent(node),
      });
    }
    previous = node;
  }
  return headings;
}

function compile(source: string, page: GuidePageId, locale: Locale) {
  const title = source.match(/^# (.+)$/m)?.[1];
  if (!title) throw new Error(`Guidebook title is missing: ${locale}/${page}`);
  let body: string;
  if (page === 'overview') {
    const start = source.indexOf(locale === 'en' ? '## Find an answer' : '## 按问题查找');
    if (start < 0) throw new Error(`Guidebook overview is missing its task index: ${locale}`);
    body = source.slice(start);
  } else {
    body = source
      .replace(/^# .+\r?\n+/, '')
      .replace(/^(?:>.*\r?\n)+\r?\n*/, '')
      .replace(/^\[(?:教程目录|Guide directory)\][^\n]*\n+/, '');
  }
  const tree = processor.runSync(processor.parse(body));
  visit(tree, (node) => {
    delete node.position;
    delete node.data;
    if (
      node.type === 'root' ||
      (node.type === 'element' &&
        ['table', 'thead', 'tbody', 'tfoot', 'tr', 'ul', 'ol'].includes(node.tagName))
    ) {
      node.children = node.children.filter(
        (child) => child.type !== 'text' || child.value.trim() !== '',
      );
    }
  });
  return { title, tree, headings: outline(tree) };
}

async function readMediaFiles(root: string): Promise<string[]> {
  return (await readdir(path.join(root, 'guidebook', 'media'), { recursive: true }))
    .filter((file) => /\.(png|webp|mp4|vtt)$/.test(file))
    .sort();
}

function compileArticle(tree: Root, page: GuidePageId, locale: Locale, files: Set<string>): string {
  const source = JSON.stringify(tree);
  let prefix = '__guide_reference_';
  while (source.includes(prefix)) prefix += '_';
  const references = new Map<string, string>();
  const reference = (expression: string): string => {
    const token = `${prefix}${references.size}__`;
    references.set(token, expression);
    return token;
  };
  const style = (name: string): string[] => [reference(`styles.${name}`)];
  const videos: GuideDocument['videos'][number][] = [];
  const sourceUrl = `https://guidebook.invalid/guidebook/${
    page === 'overview'
      ? locale === 'en'
        ? 'README.en'
        : 'README'
      : `${GUIDE_LANGUAGE[locale]}/${page}`
  }.md`;
  const media = (href: string): string => {
    const target = new URL(href, sourceUrl);
    if (
      target.origin !== 'https://guidebook.invalid' ||
      !target.pathname.startsWith('/guidebook/media/') ||
      !files.has(target.pathname.slice('/guidebook/media/'.length))
    )
      throw new Error(`Unknown guidebook media: ${href}`);
    return reference(
      `mediaSources[${JSON.stringify(`../../..${target.pathname}`)}]${target.hash ? `+${JSON.stringify(target.hash)}` : ''}`,
    );
  };
  const link = (href: string): { value: string; separate: boolean } => {
    if (href.startsWith('#') || /^(?:https?:|mailto:)/i.test(href))
      return { value: href, separate: /^https?:/i.test(href) };
    const target = new URL(href, sourceUrl);
    if (target.origin !== 'https://guidebook.invalid')
      return { value: target.href, separate: true };
    if (target.pathname.startsWith('/guidebook/media/'))
      return { value: media(href), separate: true };
    if (target.pathname === '/guidebook/README.md' || target.pathname === '/guidebook/README.en.md')
      return {
        value: `${guideHref('overview', locale)}${target.hash}`,
        separate: false,
      };
    const chapter = GUIDE_CHAPTERS.find(
      (candidate) =>
        target.pathname === `/guidebook/${GUIDE_LANGUAGE[locale]}/${candidate.slug}.md`,
    );
    if (!chapter) throw new Error(`Unsupported guidebook link: ${href}`);
    return {
      value: `${guideHref(chapter.slug, locale)}${target.hash}`,
      separate: false,
    };
  };
  const transform = (node: Element): Element => {
    const properties = { ...node.properties };
    for (const name of ['src', 'poster']) {
      const value = properties[name];
      if (typeof value === 'string') properties[name] = media(value);
    }
    let tagName = node.tagName;
    if (tagName === 'a') {
      properties.className = style(properties.href ? 'link' : 'anchor');
      if (typeof properties.href === 'string') {
        const resolved = link(properties.href);
        properties.href = resolved.value;
        if (resolved.separate) {
          properties.target = '_blank';
          properties.rel = ['noopener', 'noreferrer'];
        }
      } else tagName = 'span';
    }
    const children = node.children.map((child) =>
      child.type === 'element' ? transform(child) : child,
    );
    if (tagName === 'video') {
      if (typeof properties.src !== 'string') throw new Error('Guide video has no source.');
      const attributes = {
        src: properties.src,
        poster: typeof properties.poster === 'string' ? properties.poster : undefined,
        lang: typeof properties.lang === 'string' ? properties.lang : undefined,
        title: typeof properties.title === 'string' ? properties.title : undefined,
      };
      const tracks = children.flatMap((child) => {
        if (child.type !== 'element' || child.tagName !== 'track') return [];
        if (typeof child.properties.src !== 'string')
          throw new Error('Guide video track has no source.');
        return [
          {
            src: child.properties.src,
            srcLang:
              typeof child.properties.srcLang === 'string' ? child.properties.srcLang : undefined,
            kind: typeof child.properties.kind === 'string' ? child.properties.kind : undefined,
            label: typeof child.properties.label === 'string' ? child.properties.label : undefined,
            default: Boolean(child.properties.default),
          },
        ];
      });
      const index = videos.push({ attributes, tracks }) - 1;
      return {
        type: 'element',
        tagName: 'div',
        properties: { className: style('videoSlot'), 'data-guide-video': index },
        children: [],
      };
    }
    if (tagName === 'img') {
      const original = node.properties.src;
      if (typeof original !== 'string') throw new Error('Guide step image has no source.');
      const file = new URL(original, sourceUrl).pathname.slice('/guidebook/media/'.length);
      const dimensions = dimensionsByFile[file];
      if (
        !dimensions ||
        dimensions.length !== 2 ||
        dimensions.some((value) => !Number.isInteger(value) || value <= 0)
      )
        throw new Error(`Missing intrinsic dimensions for guide image: ${file}`);
      properties.width = dimensions[0];
      properties.height = dimensions[1];
      properties.loading = 'lazy';
      properties.decoding = 'async';
      properties.alt ??= '';
      return {
        type: 'element',
        tagName: 'a',
        properties: {
          className: style('image'),
          href: properties.src,
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
          'aria-label': node.properties.alt,
        },
        children: [{ ...node, properties, children }],
      };
    }
    if (tagName === 'table') {
      properties.className = style('table');
      return {
        type: 'element',
        tagName: 'div',
        properties: {
          className: style('scroll'),
          tabIndex: 0,
          role: 'region',
          'aria-label': '可横向滚动的表格',
        },
        children: [{ ...node, properties, children }],
      };
    }
    return { ...node, tagName, properties, children };
  };
  const resolved: Root = {
    ...tree,
    children: tree.children.map((node) => (node.type === 'element' ? transform(node) : node)),
  };
  const html = renderToStaticMarkup(toJsxRuntime(resolved, { Fragment, jsx, jsxs }));
  const pattern = new RegExp(`(${prefix}\\d+__)`, 'g');
  const htmlSource = html
    .split(pattern)
    .map((part) => {
      const expression = references.get(part);
      return expression === undefined ? JSON.stringify(part) : `escapeAttribute(${expression})`;
    })
    .join(',');
  const videoSource = JSON.stringify(videos).replace(
    new RegExp(`"(${prefix}\\d+__)"`, 'g'),
    (_match, token: string) => {
      const expression = references.get(token);
      if (expression === undefined) throw new Error('Unknown guidebook media reference.');
      return expression;
    },
  );
  return `html:[${htmlSource}].join(""),videos:${videoSource}`;
}

/** Compile trusted source Markdown and sanitize HTML before it reaches the reader. */
export function guideContent(): Plugin {
  let root = '';
  let development = false;
  const documentModulesByFile = new Map<string, string>();
  return {
    name: 'guidebook-compiled-content',
    configResolved(config) {
      root = config.root;
      development = config.command === 'serve';
    },
    resolveId(id) {
      if (id === mediaModule) return `\0${id}`;
      if (!id.startsWith(modulePrefix)) return;
      const locale = id.slice(modulePrefix.length);
      if (!locales.some((value) => value === locale))
        throw new Error(`Unknown guidebook language module: ${id}`);
      return `\0${id}`;
    },
    hotUpdate({ file, modules }) {
      const moduleId = normalizePath(file).startsWith(`${normalizePath(root)}/guidebook/media/`)
        ? `\0${mediaModule}`
        : documentModulesByFile.get(normalizePath(file));
      if (!moduleId) return;
      const content = this.environment.moduleGraph.getModuleById(moduleId);
      if (content && !modules.includes(content)) {
        this.environment.moduleGraph.invalidateModule(content);
        return [...modules, content];
      }
    },
    async load(id) {
      if (id === `\0${mediaModule}`) {
        const directory = path.join(root, 'guidebook', 'media');
        const files = await readMediaFiles(root);
        const entries = await Promise.all(
          files.map(async (file) => {
            const absolutePath = path.join(directory, file);
            const sourcePath = `guidebook/media/${file.replaceAll(path.sep, '/')}`;
            if (!development) this.addWatchFile(absolutePath);
            const url = development
              ? JSON.stringify(`/${sourcePath}`)
              : `import.meta.ROLLUP_FILE_URL_${this.emitFile({
                  type: 'asset',
                  name: path.basename(file),
                  originalFileName: sourcePath,
                  source: await readFile(absolutePath),
                })}`;
            return `${JSON.stringify(`../../../${sourcePath}`)}:${url}`;
          }),
        );
        return { code: `export default {${entries.join(',')}};`, map: { mappings: '' } };
      }
      if (!id.startsWith(`\0${modulePrefix}`)) return;
      const locale = locales.find((value) => id === `\0${modulePrefix}${value}`);
      if (!locale) throw new Error(`Unknown guidebook language module: ${id}`);
      const mediaFiles = new Set(
        (await readMediaFiles(root)).map((file) => file.replaceAll(path.sep, '/')),
      );
      const documents = await Promise.all(
        pages.map(async (page) => {
          const file = path.join(
            root,
            'guidebook',
            page === 'overview'
              ? locale === 'en'
                ? 'README.en.md'
                : 'README.md'
              : `${GUIDE_LANGUAGE[locale]}/${page}.md`,
          );
          documentModulesByFile.set(normalizePath(file), id);
          if (!development) this.addWatchFile(file);
          const document = compile(await readFile(file, 'utf8'), page, locale);
          return `${JSON.stringify(page)}:{title:${JSON.stringify(document.title)},headings:${JSON.stringify(document.headings)},${compileArticle(document.tree, page, locale, mediaFiles)}}`;
        }),
      );
      return {
        code: [
          `import mediaSources from ${JSON.stringify(mediaModule)};`,
          `import styles from ${JSON.stringify(normalizePath(path.join(root, 'src/features/guide/GuideArticle.module.css')))};`,
          'const escapeAttribute = value => value.replaceAll("&", "&amp;").replaceAll(\'"\', "&quot;");',
          `export default {${documents.join(',')}};`,
        ].join('\n'),
        map: { mappings: '' },
      };
    },
  };
}
