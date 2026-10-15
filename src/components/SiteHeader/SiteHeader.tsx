/** biome-ignore-all lint/a11y/useValidAnchor: These links navigate normally and also dismiss the mobile menu. */
import { Button, ConfigProvider, Popover } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS, type Locale, type WebsiteCopy } from '../../content';
import { guideHref } from '../../content/guidebook';
import { HEADER_THEME } from '../../theme/components';
import type { ThemePreference } from '../../theme/utils';
import GitHubRibbon from '../GitHubRibbon/GitHubRibbon';
import Icon from '../Icon/Icon';
import PreferenceMenu from '../PreferenceMenu/PreferenceMenu';
import styles from './SiteHeader.module.css';
import { COMPACT_HEADER_QUERY, getLanguageChoices, getThemeChoices, THEME_ICONS } from './utils';

interface Props {
  content: WebsiteCopy['nav'];
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  themePreference: ThemePreference;
  onThemeChange: (preference: ThemePreference) => void;
  homePrefix?: string;
}

export default function SiteHeader({
  content,
  locale,
  onLocaleChange,
  themePreference,
  onThemeChange,
  homePrefix = '',
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(() => window.matchMedia(COMPACT_HEADER_QUERY).matches);
  const [openPreference, setOpenPreference] = useState<'theme' | 'language' | null>(null);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenPreference(null);
  }, []);
  const popover = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const query = window.matchMedia(COMPACT_HEADER_QUERY);
    const updateLayout = (event: MediaQueryListEvent) => {
      setCompact(event.matches);
      closeMenu();
    };
    query.addEventListener('change', updateLayout);
    return () => query.removeEventListener('change', updateLayout);
  }, [closeMenu]);

  const download = (
    <Button
      type="primary"
      block={compact}
      size={compact ? 'large' : 'middle'}
      href={LINKS.release}
      target="_blank"
      rel="noopener noreferrer"
      data-automation-id="homepage.download"
      onClick={() => {
        closeMenu();
        if (compact) menuButton.current?.focus({ preventScroll: true });
      }}
    >
      {content.download}
      <Icon name="arrowUpRight" size={16} />
    </Button>
  );
  const preferences = (
    <div className={styles.preferences}>
      <PreferenceMenu
        name="theme"
        label={content.theme.label}
        icon={THEME_ICONS[themePreference]}
        value={themePreference}
        valueLabel={content.theme[themePreference]}
        choices={getThemeChoices(content.theme)}
        inline={compact}
        open={openPreference === 'theme'}
        onOpenChange={(open) =>
          setOpenPreference((current) => (open ? 'theme' : current === 'theme' ? null : current))
        }
        onValueChange={onThemeChange}
      />
      <PreferenceMenu
        name="language"
        label={content.language.label}
        icon="languages"
        value={locale}
        valueLabel={content.language[locale]}
        choices={getLanguageChoices(content.language)}
        compactLabel={locale === 'zh' ? '中文' : 'EN'}
        inline={compact}
        open={openPreference === 'language'}
        onOpenChange={(open) =>
          setOpenPreference((current) =>
            open ? 'language' : current === 'language' ? null : current,
          )
        }
        onValueChange={(next) => {
          onLocaleChange(next);
          closeMenu();
          if (compact) menuButton.current?.focus({ preventScroll: true });
        }}
      />
    </div>
  );
  const controls = compact ? (
    <>
      {preferences}
      <div className={styles.downloadFooter}>{download}</div>
    </>
  ) : (
    <>
      {download}
      {preferences}
    </>
  );

  return (
    <ConfigProvider theme={HEADER_THEME}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link
            className={styles.brand}
            to={`${homePrefix}#top`}
            aria-label="Interceptor"
            onClick={closeMenu}
          >
            <img
              src={`${import.meta.env.BASE_URL}media/interceptor-icon.png`}
              alt=""
              width="34"
              height="34"
            />
            <span>
              Interceptor<span className={styles.brandDot}>.</span>
            </span>
          </Link>
          <nav id="main-navigation" className={styles.nav} aria-label={content.label}>
            <Link to={`${homePrefix}#features`} onClick={closeMenu}>
              {content.features}
            </Link>
            <Link
              to={guideHref('overview', locale)}
              onClick={closeMenu}
              data-automation-id="homepage.navigation.guide"
            >
              {content.guide}
            </Link>
          </nav>
          <div className={styles.actions}>
            {compact ? (
              <Popover
                open={menuOpen}
                onOpenChange={(open) => (open ? setMenuOpen(true) : closeMenu())}
                trigger="click"
                placement="bottomRight"
                align={{ offset: [0, 8] }}
                arrow={false}
                destroyOnHidden
                styles={{ container: { padding: 0 } }}
                afterOpenChange={(open) => {
                  if (open) {
                    popover.current
                      ?.querySelector<HTMLElement>('[role="menuitem"][aria-haspopup]')
                      ?.focus({ preventScroll: true });
                  }
                }}
                content={
                  <div
                    ref={popover}
                    id="header-actions-menu"
                    className={styles.popover}
                    role="group"
                    aria-label={content.menu}
                    onKeyDown={(event) => {
                      if (event.key !== 'Escape') return;
                      event.preventDefault();
                      closeMenu();
                      menuButton.current?.focus({ preventScroll: true });
                    }}
                  >
                    {controls}
                  </div>
                }
              >
                <button
                  ref={menuButton}
                  type="button"
                  className={styles.menu}
                  aria-label={menuOpen ? content.close : content.menu}
                  aria-controls="header-actions-menu"
                  aria-haspopup="dialog"
                  aria-expanded={menuOpen}
                  data-automation-id="homepage.menu"
                >
                  <Icon name={menuOpen ? 'close' : 'menu'} />
                </button>
              </Popover>
            ) : (
              <div
                id="header-actions-menu"
                className={styles.controls}
                role="group"
                aria-label={content.menu}
              >
                {controls}
              </div>
            )}
          </div>
        </div>
        <GitHubRibbon content={content.star} />
      </header>
    </ConfigProvider>
  );
}
