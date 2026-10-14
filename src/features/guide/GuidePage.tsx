import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import type { Locale } from '../../content';
import { GUIDE_CHAPTERS, GUIDE_UI, type GuidePageId, guideHref } from '../../content/guidebook';
import GuideArticle from './GuideArticle';
import GuideOutline from './GuideOutline';
import GuideOverview from './GuideOverview';
import styles from './GuidePage.module.css';
import GuideSidebar from './GuideSidebar';
import { type GuideHeading, readGuideDocument } from './utils';

export default function GuidePage({ page, locale }: { page: GuidePageId; locale: Locale }) {
  const [headings, setHeadings] = useState<GuideHeading[]>([]);
  const document = readGuideDocument(page);
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
    >
      <GuideSidebar page={page} locale={locale} />
      <div className={styles.reading}>
        <div className={styles.mobileNavigation}>
          <Link to={guideHref('overview', locale)}>{copy.directory}</Link>
          {!overview && (
            <>
              <span>/</span>
              <span lang="zh-CN">{chapter?.label}</span>
            </>
          )}
        </div>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1 lang={overview ? undefined : 'zh-CN'}>
          {overview ? copy.overviewTitle : document.title}
        </h1>
        <p className={styles.lead} lang={overview ? undefined : 'zh-CN'}>
          {overview ? copy.overviewSummary : chapter?.summary}
        </p>
        <div className={styles.notice} data-automation-id="guide.draft">
          <Icon name="info" size={16} />
          <p>
            <strong>{copy.draft}</strong> · {copy.notice}
          </p>
        </div>
        {overview && <GuideOverview locale={locale} />}
        <GuideArticle
          page={page}
          markdown={document.body}
          locale={locale}
          onHeadings={setHeadings}
        />
        {!overview && (
          <nav className={styles.pagination} aria-label={copy.directory}>
            {previous ? (
              <Link to={guideHref(previous.slug, locale)}>
                <small>{copy.previous}</small>
                <span lang="zh-CN">← {previous.label}</span>
              </Link>
            ) : (
              <Link to={guideHref('overview', locale)}>{copy.directory}</Link>
            )}
            {next && (
              <Link to={guideHref(next.slug, locale)}>
                <small>{copy.next}</small>
                <span lang="zh-CN">{next.label} →</span>
              </Link>
            )}
          </nav>
        )}
      </div>
      {!overview && <GuideOutline headings={headings} locale={locale} />}
    </main>
  );
}
