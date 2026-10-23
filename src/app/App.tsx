import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Link,
  matchPath,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import ImagePreview from '../components/ImagePreview/ImagePreview';
import type { ImagePreviewState } from '../components/ImagePreview/interfaces';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import type { Locale } from '../content';
import { COPY } from '../content';
import { GUIDE_CHAPTERS, GUIDE_ROUTES, GUIDE_UI, guideHref } from '../content/guidebook';
import GuideErrorBoundary from '../features/guide/GuideErrorBoundary';
import HomePage from '../features/home/HomePage';
import { useTheme } from '../theme/useTheme';
import type { ThemePreference } from '../theme/utils';
import styles from './App.module.css';

const GuidePage = lazy(() => import('../features/guide/GuidePage'));
const siteOrigin = 'https://www.interceptor.cn';
const DESKTOP_APP_ORIGIN = 'interceptor://app';
const DESKTOP_GUIDEBOOK_SOURCE = 'interceptor-desktop-guidebook';
const DESKTOP_THEMES = ['light', 'warm', 'ember', 'dark'] as const;
type DesktopTheme = (typeof DESKTOP_THEMES)[number];

export default function App({
  initialThemePreference,
}: {
  initialThemePreference: ThemePreference;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const guideRoute = matchRoutes(GUIDE_ROUTES, location)?.[0]?.route ?? null;
  const guidePage = guideRoute?.page ?? null;
  const guideLocale = guideRoute?.locale ?? null;
  const [embedded] = useState(
    () => guidePage !== null && new URLSearchParams(location.search).get('embed') === 'desktop',
  );
  const legacyEnglishGuide =
    guidePage !== null &&
    guideLocale === 'zh' &&
    new URLSearchParams(location.search).get('lang') === 'en';
  const home = matchPath('/', location.pathname) !== null;
  const [locale, setLocale] = useState<Locale>(() =>
    guideLocale === 'en' ||
    (guidePage !== null && new URLSearchParams(location.search).get('lang') === 'en')
      ? 'en'
      : 'zh',
  );
  const content = COPY[locale];
  const { preference, theme, chooseTheme } = useTheme(initialThemePreference);
  const [imagePreview, setImagePreview] = useState<ImagePreviewState>({
    open: false,
  });
  const [desktopTheme, setDesktopTheme] = useState<DesktopTheme | null>(null);
  const [guideSearchRequest, setGuideSearchRequest] = useState(0);
  const siteRef = useRef<HTMLDivElement>(null);
  const restoreImageFocus = useRef<HTMLButtonElement | undefined>(undefined);

  useEffect(() => {
    const site = siteRef.current;
    if (!site) return;
    const openImagePreview = (event: MouseEvent): void => {
      const trigger =
        event.target instanceof Element ? event.target.closest('button[data-image-preview]') : null;
      if (!(trigger instanceof HTMLButtonElement)) return;
      const image = trigger.querySelector('img');
      const source = trigger.dataset.imageSrc ?? image?.currentSrc ?? image?.src;
      if (!source) {
        console.error('Image preview trigger has no image source.');
        return;
      }
      setImagePreview({
        open: true,
        image: {
          source,
          alt: image?.alt ?? trigger.dataset.imageAlt ?? trigger.textContent?.trim() ?? '',
        },
        trigger,
      });
    };
    site.addEventListener('click', openImagePreview);
    return () => site.removeEventListener('click', openImagePreview);
  }, []);

  useEffect(() => {
    setImagePreview({ open: false });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (imagePreview.open || !restoreImageFocus.current) return;
    const trigger = restoreImageFocus.current;
    restoreImageFocus.current = undefined;
    if (trigger.isConnected) trigger.focus({ preventScroll: true });
  }, [imagePreview.open]);

  useLayoutEffect(() => {
    if (guidePage === null || guideLocale === null) return;
    if (legacyEnglishGuide) {
      const search = new URLSearchParams(location.search);
      search.delete('lang');
      navigate(
        {
          pathname: guideHref(guidePage, 'en'),
          search: search.toString(),
          hash: location.hash,
        },
        { replace: true },
      );
      return;
    }
    setLocale(guideLocale);
  }, [guideLocale, guidePage, legacyEnglishGuide, location.hash, navigate]);

  useLayoutEffect(() => {
    if (
      !embedded ||
      guidePage === null ||
      new URLSearchParams(location.search).get('embed') === 'desktop'
    ) {
      return;
    }
    const search = new URLSearchParams(location.search);
    search.set('embed', 'desktop');
    navigate(
      {
        pathname: location.pathname,
        search: search.toString(),
        hash: location.hash,
      },
      { replace: true },
    );
  }, [embedded, guidePage, location.hash, location.pathname, location.search, navigate]);

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  useLayoutEffect(() => {
    if (home && location.hash) {
      try {
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ block: 'start', behavior: 'auto' });
      } catch (error) {
        if (!(error instanceof URIError)) throw error;
        console.warn('Website URL contains an invalid fragment.');
      }
    }
  }, [home, location]);

  useLayoutEffect(() => {
    if (!embedded || desktopTheme === null) return;
    document.documentElement.dataset.theme = desktopTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        'content',
        desktopTheme === 'dark' ? '#0c0d11' : desktopTheme === 'ember' ? '#1b1815' : '#ffffff',
      );
  }, [desktopTheme, embedded, theme]);

  useEffect(() => {
    if (!embedded) return undefined;
    const handleDesktopMessage = (event: MessageEvent<unknown>): void => {
      if (
        event.source !== window.parent ||
        event.origin !== DESKTOP_APP_ORIGIN ||
        typeof event.data !== 'object' ||
        event.data === null ||
        !('source' in event.data) ||
        event.data.source !== DESKTOP_GUIDEBOOK_SOURCE ||
        !('type' in event.data)
      ) {
        return;
      }
      if (event.data.type === 'open-search') {
        setGuideSearchRequest((current) => current + 1);
        return;
      }
      if (
        event.data.type !== 'sync-preferences' ||
        !('theme' in event.data) ||
        !DESKTOP_THEMES.includes(event.data.theme as DesktopTheme) ||
        !('locale' in event.data) ||
        !['zh-CN', 'en'].includes(String(event.data.locale))
      ) {
        return;
      }
      const nextTheme = event.data.theme as DesktopTheme;
      const nextLocale: Locale = event.data.locale === 'zh-CN' ? 'zh' : 'en';
      setDesktopTheme(nextTheme);
      setLocale(nextLocale);
      if (guidePage !== null && nextLocale !== guideLocale) {
        const search = new URLSearchParams(location.search);
        search.set('embed', 'desktop');
        navigate(
          {
            pathname: guideHref(guidePage, nextLocale),
            search: search.toString(),
            hash: location.hash,
          },
          { replace: true },
        );
      }
    };
    window.addEventListener('message', handleDesktopMessage);
    return () => window.removeEventListener('message', handleDesktopMessage);
  }, [embedded, guideLocale, guidePage, location.hash, location.search, navigate]);

  useEffect(() => {
    if (!embedded) return;
    window.parent.postMessage(
      {
        source: 'interceptor-guidebook',
        type: 'location-changed',
        url: window.location.href,
      },
      '*',
    );
  }, [embedded, location.hash, location.pathname, location.search]);

  useEffect(() => {
    const title = home
      ? content.title
      : guidePage === null
        ? `${GUIDE_UI[locale].notFound} — Interceptor`
        : `${guidePage === 'overview' ? '' : `${GUIDE_CHAPTERS.find((chapter) => chapter.slug === guidePage)?.label[locale]} · `}${GUIDE_UI[locale].title} — Interceptor`;
    const description =
      guidePage === null
        ? content.description
        : (GUIDE_CHAPTERS.find((chapter) => chapter.slug === guidePage)?.summary[locale] ??
          GUIDE_UI[locale].overviewSummary);
    const canonicalUrl = new URL(
      legacyEnglishGuide && guidePage !== null ? guideHref(guidePage, 'en') : location.pathname,
      siteOrigin,
    );
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl.href);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl.href);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', locale === 'zh' ? 'zh_CN' : 'en_US');
  }, [locale, content, guidePage, home, legacyEnglishGuide, location.pathname]);

  return (
    <div ref={siteRef} id="top" className={styles.site}>
      {!embedded && (
        <>
          <a className={styles.skipLink} href="#main-content">
            {content.skip}
          </a>
          <SiteHeader
            content={content.nav}
            locale={locale}
            onLocaleChange={(next) => {
              if (next === locale) return;
              setLocale(next);
              if (guidePage !== null) {
                const search = new URLSearchParams(location.search);
                search.delete('lang');
                navigate(
                  {
                    pathname: guideHref(guidePage, next),
                    search: search.toString(),
                    hash: location.hash,
                  },
                  { replace: true },
                );
              }
            }}
            themePreference={preference}
            onThemeChange={chooseTheme}
            homePrefix={home ? '' : '/'}
          />
        </>
      )}
      <GuideErrorBoundary resetKey={`${location.pathname}${location.search}`} locale={locale}>
        <Suspense
          fallback={
            <main id="main-content" className={styles.loading} role="status">
              {GUIDE_UI[locale].loading}
            </main>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage content={content} theme={theme} locale={locale} />}
            />
            {GUIDE_ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                caseSensitive={route.caseSensitive}
                element={
                  <GuidePage
                    page={route.page}
                    locale={locale}
                    embedded={embedded}
                    searchRequest={guideSearchRequest}
                  />
                }
              />
            ))}
            <Route
              path="*"
              element={
                <main id="main-content" className={styles.loading} role="alert">
                  <h1>{GUIDE_UI[locale].notFound}</h1>
                  <Link to="/">{GUIDE_UI[locale].back}</Link>
                </main>
              }
            />
          </Routes>
        </Suspense>
      </GuideErrorBoundary>
      {!embedded && <SiteFooter content={content.footer} homePrefix={home ? '' : '/'} />}
      {imagePreview.open && (
        <ImagePreview
          image={imagePreview.image}
          content={content.imagePreview}
          onClose={() => {
            restoreImageFocus.current = imagePreview.trigger;
            setImagePreview({ open: false });
          }}
        />
      )}
    </div>
  );
}
