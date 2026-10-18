import type { ComponentProps } from 'react';
import styles from './GuideLink.module.css';

export default function GuideLink({ href, id, title, children }: ComponentProps<'a'>) {
  if (!href) return <span id={id} className={styles.anchor} />;
  const external = /^(?:https?:)?\/\//i.test(href);
  const openSeparately =
    external || href.startsWith('/assets/') || href.startsWith('/guidebook/media/');
  return (
    <a
      id={id}
      href={href}
      title={title}
      className={styles.link}
      target={openSeparately ? '_blank' : undefined}
      rel={openSeparately ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
