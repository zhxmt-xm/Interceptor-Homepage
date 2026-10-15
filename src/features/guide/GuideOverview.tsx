import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import type { Locale } from '../../content';
import { GUIDE_CHAPTERS, GUIDE_GROUPS, guideHref } from '../../content/guidebook';
import styles from './GuideOverview.module.css';

export default function GuideOverview({ locale }: { locale: Locale }) {
  return (
    <div className={styles.groups}>
      {GUIDE_GROUPS.map((group, index) => (
        <section className={styles.group} key={group.title.en}>
          <h2>{group.title[locale]}</h2>
          <p>{group.description[locale]}</p>
          <div className={styles.links}>
            {GUIDE_CHAPTERS.filter((chapter) => chapter.group === index).map((chapter) => (
              <Link to={guideHref(chapter.slug, locale)} key={chapter.slug}>
                {chapter.label[locale]}
                <Icon name="arrowRight" size={15} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
