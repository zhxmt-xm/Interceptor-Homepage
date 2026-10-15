import type { Locale, WebsiteCopy } from '../../content';
import type { ThemePreference } from '../../theme/utils';
import type { IconId } from '../Icon/icons';
import type { PreferenceChoice } from '../PreferenceMenu/interfaces';

export const COMPACT_HEADER_QUERY = '(max-width: 840px)';

export const THEME_ICONS: Record<ThemePreference, IconId> = {
  system: 'monitor',
  light: 'sun',
  dark: 'moon',
};

export function getThemeChoices(
  content: WebsiteCopy['nav']['theme'],
): PreferenceChoice<ThemePreference>[] {
  return (['system', 'light', 'dark'] as const).map((value) => ({
    value,
    label: content[value],
    icon: THEME_ICONS[value],
  }));
}

export function getLanguageChoices(
  content: WebsiteCopy['nav']['language'],
): PreferenceChoice<Locale>[] {
  return [
    { value: 'zh', label: content.zh },
    { value: 'en', label: content.en },
  ];
}
