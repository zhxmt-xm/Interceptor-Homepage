import type { GuidePageId } from '../../content/guidebook';

export interface GuideHeading {
  readonly id: string;
  readonly title: string;
}

export interface GuideDocument {
  readonly title: string;
  readonly html: string;
  readonly headings: readonly GuideHeading[];
  readonly search: readonly GuideSearchEntry[];
}

export type GuideDocuments = Readonly<Record<GuidePageId, GuideDocument>>;

export interface GuideSearchEntry {
  readonly kind: 'chapter' | 'section' | 'step';
  readonly anchor: string;
  readonly title: string;
  readonly text: string;
  readonly step?: number;
}

export interface GuideSearchResult {
  readonly kind: GuideSearchEntry['kind'];
  readonly href: string;
  readonly chapter: string;
  readonly title: string;
  readonly excerpt: string;
  readonly step?: number;
}
