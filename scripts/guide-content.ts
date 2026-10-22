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
  GUIDE_UI,
  type GuidePageId,
  guideHref,
} from '../src/content/guidebook.ts';
import type { Locale } from '../src/content/types.ts';
import type { GuideHeading, GuideSearchEntry } from '../src/features/guide/interfaces.ts';

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

function readHeading(node: Element, previous: Element | undefined): GuideHeading {
  const id =
    previous && ['p', 'a', 'span'].includes(previous.tagName) && textContent(previous).trim() === ''
      ? explicitAnchor(previous)
      : undefined;
  const generatedId = node.properties.id;
  if (typeof generatedId !== 'string') throw new Error('Guidebook heading has no anchor.');
  return {
    id: id ?? generatedId.replace(/^guide-heading-/, ''),
    title: textContent(node),
  };
}

function outline(tree: Root): GuideHeading[] {
  const headings: GuideHeading[] = [];
  let previous: Element | undefined;
  for (const node of tree.children) {
    if (node.type !== 'element') continue;
    if (node.tagName === 'h2') {
      headings.push(readHeading(node, previous));
    }
    previous = node;
  }
  return headings;
}

function searchableText(node: Nodes): string {
  if (node.type === 'text') return node.value;
  if (!('children' in node)) return '';
  if (node.type === 'element' && node.tagName === 'img') return '';
  const text = node.children.map(searchableText).join('');
  return node.type === 'element' &&
    /^(?:p|li|ul|ol|pre|blockquote|table|tr|th|td|div|br|h[1-6])$/.test(node.tagName)
    ? `${text} `
    : text;
}

function searchEntries(
  tree: Root,
  title: string,
  page: GuidePageId,
  locale: Locale,
): GuideSearchEntry[] {
  const summary =
    GUIDE_CHAPTERS.find((chapter) => chapter.slug === page)?.summary[locale] ??
    GUIDE_UI[locale].overviewSummary;
  let section: { kind: 'chapter' | 'section'; anchor: string; title: string; text: string } = {
    kind: 'chapter',
    anchor: '',
    title,
    text: summary,
  };
  const entries: GuideSearchEntry[] = [section];
  const ids = new Set<string>();
  visit(tree, 'element', (node) => {
    if (typeof node.properties.id === 'string') ids.add(node.properties.id);
  });
  let previous: Element | undefined;
  let listIndex = 0;
  for (const node of tree.children) {
    if (node.type !== 'element') continue;
    if (/^h[2-6]$/.test(node.tagName)) {
      const heading = readHeading(node, previous);
      section = { kind: 'section', anchor: heading.id, title: heading.title, text: '' };
      entries.push(section);
    } else if (node.tagName === 'ol') {
      listIndex += 1;
      const start = typeof node.properties.start === 'number' ? node.properties.start : 1;
      const steps = node.children.filter(
        (child): child is Element => child.type === 'element' && child.tagName === 'li',
      );
      for (const [index, step] of steps.entries()) {
        let anchor: string;
        if (typeof step.properties.id === 'string') {
          anchor = step.properties.id.replace(/^guide-anchor-/, '');
        } else {
          anchor = `search-step-${explicitAnchor(step) ?? `${listIndex}-${index + 1}`}`;
          const id = `guide-anchor-${anchor}`;
          if (ids.has(id))
            throw new Error(`Duplicate guide search anchor: ${locale}/${page}#${anchor}`);
          ids.add(id);
          step.properties.id = id;
        }
        entries.push({
          kind: 'step',
          anchor,
          title: section.title,
          text: searchableText(step).replace(/\s+/gu, ' ').trim(),
          step: start + index,
        });
      }
    } else {
      section.text = `${section.text} ${searchableText(node)}`.replace(/\s+/gu, ' ').trim();
    }
    previous = node;
  }
  return entries;
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
  const headings = outline(tree);
  const search = searchEntries(tree, title, page, locale);
  return { title, tree, headings, search };
}

async function readMediaFiles(root: string): Promise<string[]> {
  return (await readdir(path.join(root, 'guidebook', 'media'), { recursive: true }))
    .filter((file) => /\.(png|webp)$/.test(file))
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
  const link = (href: string): { value: string; separate: boolean; image?: boolean } => {
    if (href.startsWith('#') || /^(?:https?:|mailto:)/i.test(href))
      return { value: href, separate: /^https?:/i.test(href) };
    const target = new URL(href, sourceUrl);
    if (target.origin !== 'https://guidebook.invalid')
      return { value: target.href, separate: true };
    if (target.pathname.startsWith('/guidebook/media/'))
      return { value: media(href), separate: false, image: true };
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
  const transform = (node: Element, insideImageButton = false): Element => {
    const properties = { ...node.properties };
    if (typeof properties.src === 'string') properties.src = media(properties.src);
    let tagName = node.tagName;
    let imageButton = false;
    if (tagName === 'a') {
      properties.className = style(properties.href ? 'link' : 'anchor');
      if (typeof properties.href === 'string') {
        const resolved = link(properties.href);
        properties.href = resolved.value;
        const linkedImage = node.children.find(
          (child): child is Element => child.type === 'element' && child.tagName === 'img',
        );
        if (resolved.image || linkedImage) {
          const source = linkedImage?.properties.src;
          tagName = 'button';
          imageButton = true;
          properties.className = style(linkedImage ? 'image' : 'imageLink');
          properties.type = 'button';
          properties['data-image-preview'] = true;
          properties['data-image-src'] =
            typeof source === 'string' ? media(source) : resolved.value;
          properties['data-image-alt'] = linkedImage?.properties.alt ?? textContent(node);
          properties['aria-haspopup'] = 'dialog';
          delete properties.href;
          delete properties.target;
          delete properties.rel;
        } else if (resolved.separate) {
          properties.target = '_blank';
          properties.rel = ['noopener', 'noreferrer'];
        }
      } else tagName = 'span';
    }
    const children = node.children.map((child) =>
      child.type === 'element' ? transform(child, imageButton || insideImageButton) : child,
    );
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
      if (insideImageButton) return { ...node, properties, children };
      return {
        type: 'element',
        tagName: 'button',
        properties: {
          className: style('image'),
          type: 'button',
          'data-image-preview': true,
          'data-image-src': properties.src,
          'aria-haspopup': 'dialog',
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
  return `html:[${htmlSource}].join("")`;
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
          return `${JSON.stringify(page)}:{title:${JSON.stringify(document.title)},headings:${JSON.stringify(document.headings)},search:${JSON.stringify(document.search)},${compileArticle(document.tree, page, locale, mediaFiles)}}`;
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
