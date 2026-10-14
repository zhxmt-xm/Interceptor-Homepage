import { english } from './en';
import type { Locale } from './types';
import { chinese } from './zh';

export { LINKS } from './links';
export type { Locale } from './types';
export type WebsiteCopy = typeof english;

export const COPY: Record<Locale, WebsiteCopy> = { en: english, zh: chinese };
