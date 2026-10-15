import overviewSource from '../../../guidebook/README.md?raw';
import type { Locale } from '../../content';
import { GUIDE_CHAPTERS, type GuidePageId, guideHref } from '../../content/guidebook';

const sources = import.meta.glob<string>('../../../guidebook/zh-CN/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export interface GuideHeading {
  id: string;
  title: string;
}

export function readGuideDocument(page: GuidePageId): { title: string; body: string } {
  if (page === 'overview') {
    const start = overviewSource.indexOf('## 按问题查找');
    if (start < 0) throw new Error('Guidebook overview is missing its task index.');
    return { title: 'Interceptor 使用指南', body: overviewSource.slice(start) };
  }
  const source = sources[`../../../guidebook/zh-CN/${page}.md`];
  if (source === undefined) throw new Error(`Missing guidebook source: ${page}`);
  const title = source.match(/^# (.+)$/m)?.[1];
  if (!title) throw new Error(`Guidebook chapter has no title: ${page}`);
  const body = source
    .replace(/^# .+\r?\n+/, '')
    .replace(/^(?:>.*\r?\n)+\r?\n*/, '')
    .replace(/^\[教程目录\][^\n]*\n+/, '');
  return { title, body };
}

export function resolveGuideHref(href: string, page: GuidePageId, locale: Locale): string {
  if (href.startsWith('#') || /^(?:https?:|mailto:)/i.test(href)) return href;
  const base = `https://guidebook.invalid/guidebook/${page === 'overview' ? 'README' : `zh-CN/${page}`}.md`;
  const target = new URL(href, base);
  if (target.origin !== 'https://guidebook.invalid') return target.href;
  if (target.pathname === '/guidebook/README.md')
    return `${guideHref('overview', locale)}${target.hash}`;
  const chapter = GUIDE_CHAPTERS.find(
    (candidate) => target.pathname === `/guidebook/zh-CN/${candidate.slug}.md`,
  );
  if (!chapter) throw new Error(`Unsupported guidebook link: ${href}`);
  return `${guideHref(chapter.slug, locale)}${target.hash}`;
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
