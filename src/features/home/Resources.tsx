import ActionLink from '../../components/ActionLink/ActionLink';
import Icon from '../../components/Icon/Icon';
import { LINKS, type Locale, type WebsiteCopy } from '../../content';
import { guideHref } from '../../content/guidebook';
import styles from './Resources.module.css';

export default function Resources({
  content,
  locale,
}: {
  content: WebsiteCopy['resources'];
  locale: Locale;
}) {
  return (
    <section className={styles.section} id="resources" aria-labelledby="resources-heading">
      <p className={styles.eyebrow}>{content.eyebrow}</p>
      <h2 id="resources-heading">{content.title}</h2>
      <div className={styles.grid}>
        <article className={styles.card}>
          <Icon name="arrowUpRight" size={22} />
          <h3>{content.quickStart}</h3>
          <p>{content.quickBody}</p>
          <ActionLink href={LINKS.quickStart} variant="quiet">
            {content.quickAction}
            <Icon name="arrowUpRight" size={15} />
          </ActionLink>
        </article>
        <article className={styles.card}>
          <Icon name="book" size={22} />
          <h3>{content.guide}</h3>
          <p>{content.guideBody}</p>
          <ActionLink
            href={guideHref('overview', locale)}
            variant="quiet"
            automationId="homepage.guidebook"
          >
            {content.guideAction}
            <Icon name="arrowRight" size={15} />
          </ActionLink>
        </article>
        <article className={styles.card}>
          <Icon name="monitor" size={22} />
          <h3>{content.video}</h3>
          <p>{content.videoBody}</p>
          <ActionLink
            href={`${guideHref('overview', locale)}#videos`}
            variant="quiet"
            automationId="homepage.guideVideos"
          >
            {content.videoAction}
            <Icon name="arrowRight" size={15} />
          </ActionLink>
        </article>
      </div>
      <p className={styles.access}>
        <Icon name="lock" size={12} />
        {content.access}
      </p>
    </section>
  );
}
