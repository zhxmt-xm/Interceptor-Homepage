import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { Locale } from '../../content';
import {
  GUIDE_CHAPTERS,
  GUIDE_LANGUAGE,
  GUIDE_UI,
  type GuidePageId,
  guideHref,
} from '../../content/guidebook';
import GuideArticle from './GuideArticle';
import GuideOutline from './GuideOutline';
import GuideOverview from './GuideOverview';
import styles from './GuidePage.module.css';
import GuideSidebar from './GuideSidebar';
import GuideSearchDialog from './search/GuideSearchDialog';
import GuideSearchTrigger from './search/GuideSearchTrigger';
import { readGuideDocument, scrollToGuideFragment } from './utils';

export default function GuidePage({ page, locale }: { page: GuidePageId; locale: Locale }) {
  const navigate = useNavigate();
  const location = useLocation();
  const guideDocument = readGuideDocument(page, locale);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchReturnFocus = useRef<HTMLElement | null>(null);
  const restoreSearchFocus = useRef(false);
  const openSearch = useCallback(() => {
    if (
      searchOpen ||
      [...document.querySelectorAll('[role="dialog"]')].some((dialog) => dialog.checkVisibility())
    )
      return;
    searchReturnFocus.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    restoreSearchFocus.current = false;
    setSearchOpen(true);
  }, [searchOpen]);

  useEffect(() => {
    const listener = (event: KeyboardEvent): void => {
      if (
        !event.isComposing &&
        !event.altKey &&
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [openSearch]);

  useEffect(() => {
    restoreSearchFocus.current = false;
    setSearchOpen(false);
  }, [location.key]);

  useEffect(() => {
    setSearchQuery('');
  }, [locale]);
  const chapter = GUIDE_CHAPTERS.find((item) => item.slug === page);
  const index = GUIDE_CHAPTERS.findIndex((item) => item.slug === page);
  const previous = index > 0 ? GUIDE_CHAPTERS[index - 1] : undefined;
  const next = index >= 0 ? GUIDE_CHAPTERS[index + 1] : undefined;
  const overview = page === 'overview';
  const copy = GUIDE_UI[locale];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={styles.layout}
      data-overview={overview}
      data-automation-id="guide.root"
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey ||
          !(event.target instanceof Element)
        )
          return;
        const anchor = event.target.closest('a');
        const href = anchor?.getAttribute('href');
        if (
          !anchor ||
          !event.currentTarget.contains(anchor) ||
          anchor.hasAttribute('download') ||
          anchor.target ||
          !href ||
          (!href.startsWith('#') && !/^\/guide(?:\/|[?#]|$)/.test(href))
        )
          return;
        const destination = new URL(href, window.location.href);
        event.preventDefault();
        if (destination.href === window.location.href) {
          scrollToGuideFragment();
        } else {
          navigate({
            pathname: destination.pathname,
            search: destination.search,
            hash: destination.hash,
          });
        }
      }}
    >
      <GuideSidebar page={page} locale={locale} onSearch={openSearch} />
      <div className={styles.reading}>
        <div className={styles.mobileSearch}>
          <GuideSearchTrigger locale={locale} onClick={openSearch} />
        </div>
        <div className={styles.mobileNavigation}>
          <Link to={guideHref('overview', locale)}>{copy.directory}</Link>
          {!overview && (
            <>
              <span>/</span>
              <span>{chapter?.label[locale]}</span>
            </>
          )}
        </div>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1 lang={GUIDE_LANGUAGE[locale]}>{overview ? copy.overviewTitle : guideDocument.title}</h1>
        <p className={styles.lead} lang={GUIDE_LANGUAGE[locale]}>
          {overview ? copy.overviewSummary : chapter?.summary[locale]}
        </p>
        {overview && <GuideOverview locale={locale} />}
        <GuideArticle key={`${locale}/${page}`} document={guideDocument} locale={locale} />
        {!overview && (
          <nav className={styles.pagination} aria-label={copy.directory}>
            {previous ? (
              <Link to={guideHref(previous.slug, locale)}>
                <small>{copy.previous}</small>
                <span>← {previous.label[locale]}</span>
              </Link>
            ) : (
              <Link to={guideHref('overview', locale)}>{copy.directory}</Link>
            )}
            {next && (
              <Link to={guideHref(next.slug, locale)}>
                <small>{copy.next}</small>
                <span>{next.label[locale]} →</span>
              </Link>
            )}
          </nav>
        )}
      </div>
      {!overview && <GuideOutline headings={guideDocument.headings} locale={locale} />}
      <GuideSearchDialog
        open={searchOpen}
        query={searchQuery}
        locale={locale}
        onQuery={setSearchQuery}
        onClose={() => {
          restoreSearchFocus.current = true;
          setSearchOpen(false);
        }}
        onAfterClose={() => {
          if (restoreSearchFocus.current && searchReturnFocus.current?.isConnected) {
            searchReturnFocus.current.focus({ preventScroll: true });
          }
          restoreSearchFocus.current = false;
          searchReturnFocus.current = null;
        }}
        onSelect={(href) => {
          restoreSearchFocus.current = false;
          setSearchOpen(false);
          if (new URL(href, window.location.href).href === window.location.href) {
            if (location.hash) scrollToGuideFragment();
            else window.scrollTo({ top: 0, behavior: 'auto' });
          } else {
            navigate(href);
          }
        }}
      />
    </main>
  );
}
