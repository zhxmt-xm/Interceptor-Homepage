import Icon from '../../components/Icon/Icon';
import type { FeatureDetail } from '../../content/types';
import type { Theme } from '../../theme/utils';
import styles from './FeatureSection.module.css';
import { getFeatureImagePath } from './utils';

interface Props {
  feature: FeatureDetail;
  theme: Theme;
  index: number;
  imageNote: string;
  openImage: string;
}

export default function FeatureSection({ feature, theme, index, imageNote, openImage }: Props) {
  const image = getFeatureImagePath(feature.id, theme);
  return (
    <article
      className={styles.section}
      data-reversed={index % 2 === 1}
      data-automation-id={`homepage.feature.${feature.id}`}
      aria-labelledby={`feature-${feature.id}-heading`}
    >
      <div className={styles.copy}>
        <p className={styles.label}>
          <Icon name={feature.icon} size={19} />
          <span>{feature.label}</span>
          <span className={styles.number}>0{index + 1}</span>
        </p>
        <h3 id={`feature-${feature.id}-heading`}>{feature.title}</h3>
        <p className={styles.description}>{feature.body}</p>
        <ul className={styles.points}>
          {feature.points.map((point) => (
            <li key={point}>
              <Icon name="check" size={15} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className={styles.tags}>
          {feature.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <figure className={styles.visual}>
        <a
          href={image}
          target="_blank"
          rel="noreferrer"
          aria-label={`${openImage}: ${feature.label}`}
        >
          <img src={image} width="3200" height="1800" alt={feature.imageAlt} loading="lazy" />
        </a>
        <figcaption>
          {imageNote}
          <Icon name="arrowUpRight" size={13} />
        </figcaption>
      </figure>
    </article>
  );
}
