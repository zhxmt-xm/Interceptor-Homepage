import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
  applyTheme,
  DARK_THEME_QUERY,
  getSystemTheme,
  readThemePreference,
  resolveTheme,
  saveThemePreference,
  THEME_STORAGE_KEY,
  type Theme,
  type ThemePreference,
} from './utils';

export function useTheme(initialPreference: ThemePreference) {
  const [preference, setPreference] = useState(initialPreference);
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);
  const theme = resolveTheme(preference, systemTheme);

  useEffect(() => {
    const media = window.matchMedia(DARK_THEME_QUERY);
    const followSystem = () => setSystemTheme(media.matches ? 'dark' : 'light');
    const synchronizePreference = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        setPreference(readThemePreference());
      }
    };
    media.addEventListener('change', followSystem);
    window.addEventListener('storage', synchronizePreference);
    followSystem();
    return () => {
      media.removeEventListener('change', followSystem);
      window.removeEventListener('storage', synchronizePreference);
    };
  }, []);

  useLayoutEffect(() => applyTheme(theme), [theme]);

  const chooseTheme = useCallback((next: ThemePreference) => {
    saveThemePreference(next);
    setPreference(next);
  }, []);

  return { preference, theme, chooseTheme };
}
