import englishDocuments from 'virtual:guidebook-content/en';
import chineseDocuments from 'virtual:guidebook-content/zh';
import mediaSources from 'virtual:guidebook-media';
import type { Nodes, Root } from 'hast';
import imageDimensions from '../../../guidebook/media/image-dimensions.json';
import type { Locale } from '../../content';
import {
  GUIDE_CHAPTERS,
  GUIDE_LANGUAGE,
  type GuidePageId,
  guideHref,
} from '../../content/guidebook';
import type { GuideDocument } from './interfaces';

const dimensionsByUrl = new Map(
  Object.entries(imageDimensions).map(([file, dimensions]) => {
    const url = mediaSources[`../../../guidebook/media/${file}`];
    if (!url) throw new Error(`Missing guide image in dimension index: ${file}`);
    return [url, { width: dimensions[0], height: dimensions[1] }] as const;
  }),
);

export function guideImageDimensions(url: string): { width: number; height: number } {
  const dimensions = dimensionsByUrl.get(url);
  if (!dimensions) throw new Error(`Missing intrinsic dimensions for guide image: ${url}`);
  return dimensions;
}

export function readGuideDocument(page: GuidePageId, locale: Locale): GuideDocument {
  return (locale === 'en' ? englishDocuments : chineseDocuments)[page];
}

export function resolveGuideTree(tree: Root, page: GuidePageId, locale: Locale): Root {
  const resolved = structuredClone(tree);
  const visit = (node: Nodes): void => {
    if (node.type === 'element') {
      for (const key of ['href', 'src', 'poster']) {
        const value = node.properties[key];
        if (typeof value === 'string' && value) {
          node.properties[key] =
            key === 'href'
              ? resolveGuideHref(value, page, locale)
              : resolveGuideMedia(value, page, locale);
        }
      }
    }
    if ('children' in node) node.children.forEach(visit);
  };
  visit(resolved);
  return resolved;
}

export function resolveGuideHref(href: string, page: GuidePageId, locale: Locale): string {
  if (href.startsWith('#') || /^(?:https?:|mailto:)/i.test(href)) return href;
  const target = new URL(href, guideSourceUrl(page, locale));
  if (target.origin !== 'https://guidebook.invalid') return target.href;
  if (target.pathname.startsWith('/guidebook/media/')) return resolveGuideMedia(href, page, locale);
  if (target.pathname === '/guidebook/README.md' || target.pathname === '/guidebook/README.en.md')
    return `${guideHref('overview', locale)}${target.hash}`;
  const chapter = GUIDE_CHAPTERS.find(
    (candidate) => target.pathname === `/guidebook/${GUIDE_LANGUAGE[locale]}/${candidate.slug}.md`,
  );
  if (!chapter) throw new Error(`Unsupported guidebook link: ${href}`);
  return `${guideHref(chapter.slug, locale)}${target.hash}`;
}

function guideSourceUrl(page: GuidePageId, locale: Locale): string {
  return `https://guidebook.invalid/guidebook/${
    page === 'overview'
      ? locale === 'en'
        ? 'README.en'
        : 'README'
      : `${GUIDE_LANGUAGE[locale]}/${page}`
  }.md`;
}

export function resolveGuideMedia(href: string, page: GuidePageId, locale: Locale): string {
  const target = new URL(href, guideSourceUrl(page, locale));
  const source = mediaSources[`../../..${target.pathname}`];
  if (target.origin !== 'https://guidebook.invalid' || source === undefined) {
    throw new Error(`Unknown guidebook media: ${href}`);
  }
  return `${source}${target.hash}`;
}

export function scrollToGuideFragment(): void {
  if (!window.location.hash) return;
  let fragment: string;
  try {
    fragment = decodeURIComponent(window.location.hash.slice(1));
  } catch (error) {
    if (!(error instanceof URIError)) throw error;
    console.warn('Guidebook URL contains an invalid fragment.');
    return;
  }
  const target =
    document.getElementById(`guide-anchor-${fragment}`) ??
    document.getElementById(`guide-heading-${fragment}`);
  target?.scrollIntoView({ block: 'start', behavior: 'auto' });
}
