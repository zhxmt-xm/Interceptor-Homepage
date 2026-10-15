import type { Locale } from '../../content';
import { GUIDE_UI } from '../../content/guidebook';
import GuideLink from './GuideLink';
import styles from './GuideOutline.module.css';
import type { GuideHeading } from './interfaces';

export default function GuideOutline({
  headings,
  locale,
}: {
  headings: readonly GuideHeading[];
  locale: Locale;
}) {
  return (
    <nav
      className={styles.outline}
      aria-label={GUIDE_UI[locale].onPage}
      data-automation-id="guide.outline"
    >
      <p>{GUIDE_UI[locale].onPage}</p>
      {headings.map((heading) => (
        <GuideLink href={`#${encodeURIComponent(heading.id)}`} key={heading.id}>
          {heading.title}
        </GuideLink>
      ))}
    </nav>
  );
}
