import englishDocuments from 'virtual:guidebook-content/en';
import chineseDocuments from 'virtual:guidebook-content/zh';
import type { Locale } from '../../content';
import type { GuidePageId } from '../../content/guidebook';
import type { GuideDocument, GuideSearchResult } from './interfaces';
import { searchGuideDocuments } from './search/utils';

export function readGuideDocument(page: GuidePageId, locale: Locale): GuideDocument {
  return (locale === 'en' ? englishDocuments : chineseDocuments)[page];
}

export function searchGuide(query: string, locale: Locale): GuideSearchResult[] {
  return searchGuideDocuments(locale === 'en' ? englishDocuments : chineseDocuments, query, locale);
}

export function findGuideFragmentElement(fragment: string): HTMLElement | null {
  return (
    document.getElementById(`guide-anchor-${fragment}`) ??
    document.getElementById(`guide-heading-${fragment}`)
  );
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
  const target = findGuideFragmentElement(fragment);
  target?.scrollIntoView({ block: 'start', behavior: 'auto' });
}
