/** biome-ignore-all lint/a11y/useValidAnchor: These links navigate normally and also dismiss the mobile menu. */
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS, type Locale, type WebsiteCopy } from '../../content';
import { guideHref } from '../../content/guidebook';
import type { ThemePreference } from '../../theme/utils';
import ActionLink from '../ActionLink/ActionLink';
import GitHubRibbon from '../GitHubRibbon/GitHubRibbon';
import Icon from '../Icon/Icon';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './SiteHeader.module.css';

interface Props {
  content: WebsiteCopy['nav'];
  locale: Locale;
  onToggleLocale: () => void;
  themePreference: ThemePreference;
  onThemeChange: (preference: ThemePreference) => void;
  homePrefix?: string;
}

export default function SiteHeader({
  content,
  locale,
  onToggleLocale,
  themePreference,
  onThemeChange,
  homePrefix = '',
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const menuButton = useRef<HTMLButtonElement>(null);
  const actionsMenu = useRef<HTMLDivElement>(null);
  const downloadMenuLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    downloadMenuLink.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeMenu();
      menuButton.current?.focus();
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !actionsMenu.current?.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [menuOpen, closeMenu]);

  return (
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
          <div className={styles.desktopDownload}>
            <ActionLink href={LINKS.release} target="_blank">
              {content.download}
              <Icon name="arrowUpRight" size={16} />
            </ActionLink>
          </div>
          <ThemeSwitcher
            content={content.theme}
            preference={themePreference}
            onPreferenceChange={onThemeChange}
            onOpen={closeMenu}
          />
          <button
            type="button"
            className={styles.language}
            onClick={() => {
              closeMenu();
              onToggleLocale();
            }}
            aria-label={content.language}
            data-automation-id="homepage.language"
          >
            <Icon name="languages" size={17} />
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
          <div
            ref={actionsMenu}
            className={styles.menuGroup}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
            }}
          >
            <button
              ref={menuButton}
              type="button"
              className={styles.menu}
              aria-label={menuOpen ? content.close : content.menu}
              aria-controls="header-actions-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              data-automation-id="homepage.menu"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
            {menuOpen && (
              <div
                id="header-actions-menu"
                className={styles.menuPanel}
                role="group"
                aria-label={content.menu}
              >
                <a
                  ref={downloadMenuLink}
                  href={LINKS.release}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    closeMenu();
                    menuButton.current?.focus({ preventScroll: true });
                  }}
                >
                  <Icon name="download" size={16} />
                  {content.download}
                  <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <GitHubRibbon content={content.star} />
    </header>
  );
}
