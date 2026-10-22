import Icon from '../../components/Icon/Icon';
import type { WebsiteCopy } from '../../content';
import type { Theme } from '../../theme/utils';
import styles from './ProductShowcase.module.css';
import { getFeatureImagePath } from './utils';

interface Props {
  content: WebsiteCopy['showcase'];
  theme: Theme;
}

export default function ProductShowcase({ content, theme }: Props) {
  const image = getFeatureImagePath('capture', theme);

  return (
    <section className={styles.section} id="workspace" aria-label={content.label}>
      <div className={styles.frame}>
        <div className={styles.toolbar}>
          <span className={styles.workspace}>
            <Icon name="activity" size={15} />
            INTERCEPTOR / WORKSPACE
          </span>
          <span className={styles.overview}>{content.label}</span>
        </div>
        <figure>
          <button
            type="button"
            data-image-preview
            data-image-src={image}
            aria-haspopup="dialog"
            aria-label={content.original}
            className={styles.imageLink}
          >
            <img
              src={image}
              width="2000"
              height="1125"
              alt={content.alt}
              fetchPriority="high"
              data-automation-id="homepage.overview.image"
            />
          </button>
          <figcaption className={styles.caption}>
            <span>{content.description}</span>
            <span className={styles.disclaimer}>{content.caption}</span>
          </figcaption>
        </figure>
      </div>
      <div className={styles.protocols} role="group" aria-label="HTTP/1.1, HTTP/2, WebSocket, gRPC">
        <span>HTTP/1.1</span>
        <i aria-hidden="true" />
        <span>HTTP/2</span>
        <i aria-hidden="true" />
        <span>WebSocket</span>
        <i aria-hidden="true" />
        <span>gRPC</span>
      </div>
    </section>
  );
}
