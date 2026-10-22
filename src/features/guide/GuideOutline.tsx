import { useLayoutEffect, useRef, useState } from 'react';
import type { Locale } from '../../content';
import { GUIDE_UI } from '../../content/guidebook';
import GuideLink from './GuideLink';
import styles from './GuideOutline.module.css';
import type { GuideHeading } from './interfaces';
import { findGuideFragmentElement } from './utils';

export default function GuideOutline({
  headings,
  locale,
}: {
  headings: readonly GuideHeading[];
  locale: Locale;
}) {
  const outlineRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState('');

  useLayoutEffect(() => {
    const root = document.documentElement;
    const targets = headings.map((heading) => {
      const element = findGuideFragmentElement(heading.id);
      if (!element) throw new Error(`Guide outline target is missing: ${heading.id}`);
      return { id: heading.id, element };
    });
    let frame = 0;
    let mounted = true;
    const updateCurrentSection = (): void => {
      frame = 0;
      const line = Number.parseFloat(getComputedStyle(root).scrollPaddingTop);
      let next = targets[0]?.id ?? '';
      for (const target of targets) {
        const margin = Number.parseFloat(getComputedStyle(target.element).scrollMarginTop);
        // Native anchor scrolling can leave a fractional CSS-pixel remainder.
        if (Math.floor(target.element.getBoundingClientRect().top - margin) <= Math.floor(line)) {
          next = target.id;
        }
      }
      if (
        root.scrollHeight > root.clientHeight &&
        Math.ceil(root.scrollTop + root.clientHeight) >= root.scrollHeight
      ) {
        next = targets.at(-1)?.id ?? '';
      }
      setActiveId(next);
    };
    const schedule = (): void => {
      if (mounted && !frame) frame = requestAnimationFrame(updateCurrentSection);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    const article = targets[0]?.element.closest('article');
    if (article) observer.observe(article);
    updateCurrentSection();
    void document.fonts.ready.then(schedule);
    return () => {
      mounted = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [headings]);

  useLayoutEffect(() => {
    const outline = outlineRef.current;
    if (!outline) return;
    let mounted = true;
    const revealCurrentLink = (): void => {
      const current = outline.querySelector<HTMLElement>('[aria-current="location"]');
      if (!current || !outline.clientHeight) return;
      const bounds = outline.getBoundingClientRect();
      const item = current.getBoundingClientRect();
      if (item.top < bounds.top) outline.scrollTop += item.top - bounds.top;
      else if (item.bottom > bounds.bottom) outline.scrollTop += item.bottom - bounds.bottom;
    };
    const observer = new ResizeObserver(revealCurrentLink);
    observer.observe(outline);
    revealCurrentLink();
    void document.fonts.ready.then(() => {
      if (mounted) revealCurrentLink();
    });
    return () => {
      mounted = false;
      observer.disconnect();
    };
  }, [activeId, headings]);

  return (
    <nav
      ref={outlineRef}
      className={styles.outline}
      aria-label={GUIDE_UI[locale].onPage}
      data-automation-id="guide.outline"
    >
      <p>{GUIDE_UI[locale].onPage}</p>
      {headings.map((heading) => (
        <GuideLink
          href={`#${encodeURIComponent(heading.id)}`}
          key={heading.id}
          aria-current={activeId === heading.id ? 'location' : undefined}
        >
          {heading.title}
        </GuideLink>
      ))}
    </nav>
  );
}
