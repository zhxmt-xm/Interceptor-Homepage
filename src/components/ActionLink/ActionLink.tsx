import type { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionLink.module.css';

interface Props {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
  target?: HTMLAttributeAnchorTarget;
  automationId?: string;
}

export default function ActionLink({
  href,
  children,
  variant = 'primary',
  target,
  automationId,
}: Props) {
  if (href.startsWith('#') || href === '/' || /^\/guide(?:\/|[?#]|$)/.test(href)) {
    return (
      <Link
        className={`${styles.link} ${styles[variant]}`}
        to={href}
        target={target}
        data-automation-id={automationId}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      className={`${styles.link} ${styles[variant]}`}
      href={href}
      target={target}
      data-automation-id={automationId}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
