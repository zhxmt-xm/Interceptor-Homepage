import { Link } from 'react-router-dom';
import { LINKS, type WebsiteCopy } from '../../content';
import Icon from '../Icon/Icon';
import styles from './SiteFooter.module.css';

export default function SiteFooter({
  content,
  homePrefix = '',
}: {
  content: WebsiteCopy['footer'];
  homePrefix?: string;
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Link to={`${homePrefix}#top`} className={styles.brand}>
              <img
                src={`${import.meta.env.BASE_URL}media/interceptor-icon.png`}
                alt=""
                width="27"
                height="27"
                loading="lazy"
              />
              Interceptor
            </Link>
            <p className={styles.tagline}>{content.tagline}</p>
          </div>
          <div className={styles.links}>
            <nav aria-label={content.guide}>
              <a href={LINKS.repository}>
                {content.github}
                <Icon name="arrowUpRight" size={13} />
              </a>
              <a href={LINKS.feedback}>
                {content.feedback}
                <Icon name="arrowUpRight" size={13} />
              </a>
              <Link to={`${homePrefix}#resources`}>{content.guide}</Link>
            </nav>
            <p>{content.access}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Interceptor</span>
          <span>{content.note}</span>
          <span>{content.legal}</span>
        </div>
      </div>
    </footer>
  );
}
