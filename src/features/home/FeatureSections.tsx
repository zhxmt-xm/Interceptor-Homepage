import Icon from '../../components/Icon/Icon';
import type { WebsiteCopy } from '../../content';
import type { Theme } from '../../theme/utils';
import FeatureSection from './FeatureSection';
import styles from './FeatureSections.module.css';

export default function FeatureSections({
  content,
  theme,
}: {
  content: WebsiteCopy['features'];
  theme: Theme;
}) {
  return (
    <section className={styles.section} id="features" aria-labelledby="features-heading">
      <p className={styles.eyebrow}>{content.eyebrow}</p>
      <div className={styles.heading}>
        <h2 id="features-heading">{content.title}</h2>
        <p>{content.body}</p>
      </div>
      {content.sections.map((feature, index) => (
        <FeatureSection
          key={feature.id}
          feature={feature}
          index={index}
          theme={theme}
          imageNote={content.imageNote}
          openImage={content.openImage}
        />
      ))}
      <div className={styles.capabilities}>
        {content.capabilities.map((capability) => (
          <div key={capability.icon} className={styles.capability}>
            <Icon name={capability.icon} size={20} />
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
            <span>{capability.tags.join(' / ')}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
