import type { ComponentProps } from 'react';
import type { GuidePageId } from '../../content/guidebook';

export interface GuideHeading {
  readonly id: string;
  readonly title: string;
}

export interface GuideDocument {
  readonly title: string;
  readonly html: string;
  readonly videos: readonly {
    attributes: Pick<ComponentProps<'video'>, 'poster' | 'title' | 'lang'> & { src: string };
    tracks: readonly (ComponentProps<'track'> & { src: string })[];
  }[];
  readonly headings: readonly GuideHeading[];
}

export type GuideDocuments = Readonly<Record<GuidePageId, GuideDocument>>;
