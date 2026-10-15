import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Element, Nodes, Root } from 'hast';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { normalizePath, type Plugin } from 'vite';
import { GUIDE_CHAPTERS, GUIDE_LANGUAGE, type GuidePageId } from '../src/content/guidebook.ts';
import type { Locale } from '../src/content/types.ts';
import type { GuideDocument, GuideHeading } from '../src/features/guide/interfaces.ts';

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

function compile(source: string, page: GuidePageId, locale: Locale): GuideDocument {
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
  });
  return { title, tree, headings: outline(tree) };
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
        const files = (await readdir(directory, { recursive: true }))
          .filter((file) => /\.(png|webp|mp4|vtt)$/.test(file))
          .sort();
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
          return [page, compile(await readFile(file, 'utf8'), page, locale)] as const;
        }),
      );
      return {
        code: `export default JSON.parse(${JSON.stringify(JSON.stringify(Object.fromEntries(documents)))});`,
        map: { mappings: '' },
      };
    },
  };
}
