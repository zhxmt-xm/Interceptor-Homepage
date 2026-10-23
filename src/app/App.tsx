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
  const [imagePreview, setImagePreview] = useState<ImagePreviewState>({ open: false });
  const restoreImageFocus = useRef<HTMLButtonElement | undefined>(undefined);

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
    <div
      id="top"
      className={styles.site}
      onClick={(event) => {
        const trigger =
          event.target instanceof Element
            ? event.target.closest('button[data-image-preview]')
            : null;
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
      }}
    >
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
                element={<GuidePage page={route.page} locale={locale} />}
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
      <SiteFooter content={content.footer} homePrefix={home ? '' : '/'} />
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
