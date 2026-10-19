import type { GuidePageId } from '../../content/guidebook';

export interface GuideHeading {
  readonly id: string;
  readonly title: string;
}

export interface GuideDocument {
  readonly title: string;
  readonly html: string;
  readonly headings: readonly GuideHeading[];
}

export type GuideDocuments = Readonly<Record<GuidePageId, GuideDocument>>;
