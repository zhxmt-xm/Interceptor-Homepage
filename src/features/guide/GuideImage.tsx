import type { ComponentProps } from 'react';
import styles from './GuideImage.module.css';
import { guideImageDimensions } from './utils';

export default function GuideImage({ src, alt, title }: ComponentProps<'img'>) {
  if (!src) throw new Error('Guide step image has no source.');
  const dimensions = guideImageDimensions(src);
  return (
    <a
      className={styles.image}
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt ?? ''}
        title={title}
        loading="lazy"
        decoding="async"
        width={dimensions.width}
        height={dimensions.height}
      />
    </a>
  );
}
