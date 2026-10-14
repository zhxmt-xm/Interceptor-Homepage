import ActionLink from '../../components/ActionLink/ActionLink';
import Icon from '../../components/Icon/Icon';
import type { WebsiteCopy } from '../../content';
import styles from './Hero.module.css';

export default function Hero({ content }: { content: WebsiteCopy['hero'] }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.badge}>
          <span />
          {content.badge}
        </span>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1 className={styles.headline} id="hero-heading">
          {content.first}
          <br />
          <span>{content.second}</span>
        </h1>
        <p className={styles.description}>{content.body}</p>
        <div className={styles.actions}>
          <ActionLink href="#workspace">
            {content.primary}
            <Icon name="arrowDown" size={17} />
          </ActionLink>
        </div>
        <div className={styles.details}>
          <span>
            <Icon name="monitor" size={15} />
            {content.platform}
          </span>
          <span>
            <Icon name="shield" size={15} />
            {content.privacy}
          </span>
          <span>
            <Icon name="bot" size={15} />
            {content.ai}
          </span>
        </div>
      </div>
    </section>
  );
}
