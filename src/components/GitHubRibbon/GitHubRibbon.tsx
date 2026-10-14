import { LINKS, type WebsiteCopy } from '../../content';
import Icon from '../Icon/Icon';
import styles from './GitHubRibbon.module.css';

export default function GitHubRibbon({ content }: { content: WebsiteCopy['nav']['star'] }) {
  return (
    <div className={styles.corner}>
      <a
        className={styles.ribbon}
        href={LINKS.repository}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={content.description}
        title={content.description}
        data-automation-id="homepage.github-star"
      >
        <Icon name="star" size={14} />
        <span>{content.label}</span>
      </a>
    </div>
  );
}
