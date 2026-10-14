import type { ComponentProps } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './GuideLink.module.css';
import { scrollToGuideFragment } from './utils';

export default function GuideLink({ href, id, title, children }: ComponentProps<'a'>) {
  const location = useLocation();
  if (!href) return <span id={id} className={styles.anchor} />;
  const external = /^(?:https?:)?\/\//i.test(href);
  if (!external && !/^mailto:/i.test(href)) {
    return (
      <Link
        id={id}
        to={
          href.startsWith('#')
            ? { pathname: location.pathname, search: location.search, hash: href }
            : href
        }
        title={title}
        className={styles.link}
        onClick={(event) => {
          const destination = new URL(href, window.location.href);
          if (
            !event.ctrlKey &&
            !event.metaKey &&
            !event.shiftKey &&
            !event.altKey &&
            destination.pathname === window.location.pathname &&
            destination.search === window.location.search &&
            destination.hash === window.location.hash
          ) {
            event.preventDefault();
            scrollToGuideFragment();
          }
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      id={id}
      href={href}
      title={title}
      className={styles.link}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
