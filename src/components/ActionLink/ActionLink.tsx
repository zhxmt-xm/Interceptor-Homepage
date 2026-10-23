import type { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './ActionLink.module.css';

interface Props {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
  target?: HTMLAttributeAnchorTarget;
  automationId?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function ActionLink({
  href,
  children,
  variant = 'primary',
  target,
  automationId,
  onClick,
}: Props) {
  if (href.startsWith('#') || href === '/' || /^\/(?:en\/)?guide(?:\/|[?#]|$)/.test(href)) {
    return (
      <Link
        className={`${styles.link} ${styles[variant]}`}
        to={href}
        target={target}
        data-automation-id={automationId}
        onClick={onClick}
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
      onClick={onClick}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
