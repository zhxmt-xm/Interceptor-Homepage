import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import {
  Link,
  matchPath,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import SiteFooter from '../components/SiteFooter/SiteFooter';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import type { Locale } from '../content';
import { COPY } from '../content';
import { GUIDE_CHAPTERS, GUIDE_ROUTES, GUIDE_UI } from '../content/guidebook';
import HomePage from '../features/home/HomePage';
import { useTheme } from '../theme/useTheme';
import type { ThemePreference } from '../theme/utils';
import styles from './App.module.css';

const GuidePage = lazy(() => import('../features/guide/GuidePage'));

export default function App({
  initialThemePreference,
}: {
  initialThemePreference: ThemePreference;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const guidePage = matchRoutes(GUIDE_ROUTES, location)?.[0]?.route.page ?? null;
  const home = matchPath('/', location.pathname) !== null;
  const [locale, setLocale] = useState<Locale>(() =>
    guidePage !== null && new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh',
  );
  const content = COPY[locale];
  const { preference, theme, chooseTheme } = useTheme(initialThemePreference);

  useLayoutEffect(() => {
    if (guidePage !== null) {
      setLocale(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh');
    }
  }, [guidePage, location.search]);

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
        : `${guidePage === 'overview' ? '' : `${GUIDE_CHAPTERS.find((chapter) => chapter.slug === guidePage)?.label} · `}${GUIDE_UI[locale].title} — Interceptor`;
    const description =
      guidePage === null
        ? content.description
        : `${GUIDE_UI[locale].draft}. ${GUIDE_UI[locale].notice}`;
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', locale === 'zh' ? 'zh_CN' : 'en_US');
  }, [locale, content, guidePage, home]);

  return (
    <div id="top" className={styles.site}>
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
            if (next === 'en') search.set('lang', next);
            else search.delete('lang');
            navigate(
              { pathname: location.pathname, search: search.toString(), hash: location.hash },
              { replace: true },
            );
          }
        }}
        themePreference={preference}
        onThemeChange={chooseTheme}
        homePrefix={home ? '' : '/'}
      />
      <Suspense
        fallback={
          <main id="main-content" className={styles.loading} role="status">
            {GUIDE_UI[locale].loading}
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage content={content} theme={theme} locale={locale} />} />
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
      <SiteFooter content={content.footer} homePrefix={home ? '' : '/'} />
    </div>
  );
}
