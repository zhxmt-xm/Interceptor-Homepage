import type { Locale, WebsiteCopy } from '../../content';
import type { Theme } from '../../theme/utils';
import Faq from './Faq';
import FeatureSections from './FeatureSections';
import Hero from './Hero';
import styles from './HomePage.module.css';
import ProductShowcase from './ProductShowcase';
import Resources from './Resources';

export default function HomePage({
  content,
  theme,
  locale,
}: {
  content: WebsiteCopy;
  theme: Theme;
  locale: Locale;
}) {
  return (
    <main id="main-content" tabIndex={-1} className={styles.main}>
      <Hero content={content.hero} />
      <ProductShowcase content={content.showcase} theme={theme} />
      <FeatureSections content={content.features} theme={theme} />
      <Resources content={content.resources} locale={locale} />
      <Faq content={content.faq} />
    </main>
  );
}
