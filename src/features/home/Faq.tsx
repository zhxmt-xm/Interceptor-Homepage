import Icon from '../../components/Icon/Icon';
import type { WebsiteCopy } from '../../content';
import styles from './Faq.module.css';

export default function Faq({ content }: { content: WebsiteCopy['faq'] }) {
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="faq-heading">{content.title}</h2>
      </div>
      <div className={styles.questions}>
        {content.items.map((item, index) => (
          <details key={item.id} className={styles.item} name="homepage-faq">
            <summary data-automation-id={`homepage.faq.${index}`}>
              {item.question}
              <Icon name="chevronDown" size={16} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
