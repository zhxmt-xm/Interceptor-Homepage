export type ThemePreference = 'system' | 'light' | 'dark';
export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'interceptor.homepage.theme';
export const DARK_THEME_QUERY = '(prefers-color-scheme: dark)';

export function readThemePreference(): ThemePreference {
  let value: string | null;
  try {
    value = localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    if (!(error instanceof DOMException) || error.name !== 'SecurityError') throw error;
    console.warn('[theme] Saved preferences are unavailable; following the system theme.');
    return 'system';
  }
  if (value === null) return 'system';
  if (value === 'system' || value === 'light' || value === 'dark') return value;
  console.warn('[theme] Invalid saved preference; following the system theme.');
  return 'system';
}

export function saveThemePreference(preference: ThemePreference): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch (error) {
    if (
      !(error instanceof DOMException) ||
      !['SecurityError', 'QuotaExceededError'].includes(error.name)
    ) {
      throw error;
    }
    console.warn(
      '[theme] Preference could not be saved; the current page still uses your selection.',
    );
  }
}

export function getSystemTheme(): Theme {
  return window.matchMedia(DARK_THEME_QUERY).matches ? 'dark' : 'light';
}

export function resolveTheme(preference: ThemePreference, systemTheme: Theme): Theme {
  return preference === 'system' ? systemTheme : preference;
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#0c0d11' : '#ffffff');
}

export function initializeTheme(): ThemePreference {
  const preference = readThemePreference();
  applyTheme(resolveTheme(preference, getSystemTheme()));
  return preference;
}
