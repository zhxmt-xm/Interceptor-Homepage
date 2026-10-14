import type { LucideProps } from 'lucide-react';
import styles from './Icon.module.css';
import { ICON_BY_ID, type IconId } from './icons';

export default function Icon({
  name,
  size = 20,
  className = '',
  ...props
}: LucideProps & { name: IconId }) {
  const LucideIcon = ICON_BY_ID[name];
  return (
    <LucideIcon
      {...props}
      size={size}
      strokeWidth={1.9}
      className={`${styles.icon} ${className}`}
      aria-hidden="true"
      focusable="false"
    />
  );
}
