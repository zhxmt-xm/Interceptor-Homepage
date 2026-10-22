import { Search } from 'lucide-react';
import type { Locale } from '../../../content';
import { GUIDE_UI } from '../../../content/guidebook';
import styles from './GuideSearchTrigger.module.css';

export default function GuideSearchTrigger({
  locale,
  onClick,
}: {
  locale: Locale;
  onClick: () => void;
}) {
  return (
    <button
      className={styles.trigger}
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-keyshortcuts="Meta+K Control+K"
      data-automation-id="guide.search.trigger"
    >
      <Search size={16} />
      <span>{GUIDE_UI[locale].search.trigger}</span>
      <kbd>{/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K'}</kbd>
    </button>
  );
}
