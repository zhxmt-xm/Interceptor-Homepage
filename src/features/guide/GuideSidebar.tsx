import { Link } from 'react-router-dom';
import type { Locale } from '../../content';
import { GUIDE_CHAPTERS, GUIDE_UI, type GuidePageId, guideHref } from '../../content/guidebook';
import styles from './GuideSidebar.module.css';

export default function GuideSidebar({ page, locale }: { page: GuidePageId; locale: Locale }) {
  const copy = GUIDE_UI[locale];
  return (
    <aside className={styles.sidebar}>
      <p className={styles.title}>{copy.title}</p>
      <nav aria-label={copy.directory} data-automation-id="guide.chapters">
        <Link
          className={styles.chapter}
          to={guideHref('overview', locale)}
          aria-current={page === 'overview' ? 'page' : undefined}
          data-automation-id="guide.directory"
        >
          {copy.directory}
        </Link>
        {GUIDE_CHAPTERS.map((chapter, index) => (
          <Link
            className={styles.chapter}
            to={guideHref(chapter.slug, locale)}
            key={chapter.slug}
            aria-current={page === chapter.slug ? 'page' : undefined}
            data-automation-id={`guide.chapter.${chapter.slug}`}
          >
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <span>{chapter.label[locale]}</span>
          </Link>
        ))}
      </nav>
      <p className={styles.note}>
        {copy.draft}
        <br />
        {copy.sidebarNote}
      </p>
    </aside>
  );
}
