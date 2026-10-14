import type { ComponentProps } from 'react';
import styles from './GuideTable.module.css';

export default function GuideTable({ children }: ComponentProps<'table'>) {
  return (
    <div className={styles.scroll} tabIndex={0} role="region" aria-label="可横向滚动的表格">
      <table className={styles.table}>{children}</table>
    </div>
  );
}
