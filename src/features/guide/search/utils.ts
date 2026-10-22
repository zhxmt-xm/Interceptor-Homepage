import type { Locale } from '../../../content';
import { GUIDE_CHAPTERS, GUIDE_UI, type GuidePageId, guideHref } from '../../../content/guidebook';
import type { GuideDocuments, GuideSearchResult } from '../interfaces';

export function guideSearchTerms(query: string): string[] {
  return [...new Set(query.toLowerCase().trim().split(/\s+/u).filter(Boolean))];
}

export function guideSearchExcerpt(text: string, terms: readonly string[]): string {
  if (text.length <= 200) return text;
  const normalized = text.toLowerCase();
  const positions = terms.map((term) => normalized.indexOf(term)).filter((index) => index >= 0);
  const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 48);
  const end = Math.min(text.length, start + 200);
  return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}

export function searchGuideDocuments(
  documents: GuideDocuments,
  query: string,
  locale: Locale,
): GuideSearchResult[] {
  const terms = guideSearchTerms(query);
  if (!terms.length) return [];
  const phrase = terms.join(' ');
  const results: Array<{ score: number; result: GuideSearchResult }> = [];
  const pages: readonly GuidePageId[] = [
    'overview',
    ...GUIDE_CHAPTERS.map((chapter) => chapter.slug),
  ];
  for (const page of pages) {
    const chapter =
      GUIDE_CHAPTERS.find((item) => item.slug === page)?.label[locale] ??
      GUIDE_UI[locale].directory;
    for (const entry of documents[page].search) {
      const title = entry.title.toLowerCase();
      const text = `${chapter} ${entry.title} ${entry.text}`.toLowerCase();
      if (!terms.every((term) => text.includes(term))) continue;
      const exact =
        title === phrase || (entry.kind === 'chapter' && chapter.toLowerCase() === phrase);
      const titleMatches = terms.filter((term) => title.includes(term)).length;
      const score =
        (exact ? 1000 : 0) +
        (titleMatches === terms.length ? 100 : 0) +
        titleMatches * 10 +
        (title.includes(phrase) ? 5 : 0);
      results.push({
        score,
        result: {
          kind: entry.kind,
          href: `${guideHref(page, locale)}${entry.anchor ? `#${encodeURIComponent(entry.anchor)}` : ''}`,
          chapter,
          title: entry.title,
          excerpt: guideSearchExcerpt(entry.text, terms),
          ...(entry.step === undefined ? {} : { step: entry.step }),
        },
      });
    }
  }
  return results.sort((left, right) => right.score - left.score).map(({ result }) => result);
}

export function highlightGuideSearch(text: string, query: string) {
  const terms = guideSearchTerms(query);
  if (!terms.length) return [{ text, matched: false }];
  const pattern = terms
    .sort((left, right) => right.length - left.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const expression = new RegExp(`(${pattern})`, 'giu');
  return text
    .split(expression)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      matched: terms.includes(part.toLowerCase()),
    }));
}
