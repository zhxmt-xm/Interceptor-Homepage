import { useLayoutEffect, useRef } from 'react';
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import { useLocation } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type { Locale } from '../../content';
import type { GuidePageId } from '../../content/guidebook';
import styles from './GuideArticle.module.css';
import GuideLink from './GuideLink';
import GuideTable from './GuideTable';
import { type GuideHeading, resolveGuideHref, scrollToGuideFragment } from './utils';

interface Props {
  page: GuidePageId;
  markdown: string;
  locale: Locale;
  onHeadings: (headings: GuideHeading[]) => void;
}

export default function GuideArticle({ page, markdown, locale, onHeadings }: Props) {
  const article = useRef<HTMLElement>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    onHeadings(
      Array.from(article.current?.querySelectorAll('h2') ?? []).map((heading) => ({
        id: heading.id.replace(/^guide-heading-/, ''),
        title: heading.textContent ?? '',
      })),
    );
    window.addEventListener('hashchange', scrollToGuideFragment);
    scrollToGuideFragment();
    let active = true;
    void document.fonts.ready.then(() => {
      if (active) scrollToGuideFragment();
    });
    return () => {
      active = false;
      window.removeEventListener('hashchange', scrollToGuideFragment);
    };
  }, [markdown, onHeadings, location.hash]);

  return (
    <article
      ref={article}
      className={styles.article}
      lang="zh-CN"
      data-automation-id="guide.article"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          [rehypeSanitize, { ...defaultSchema, clobberPrefix: 'guide-anchor-' }],
          [rehypeSlug, { prefix: 'guide-heading-' }],
        ]}
        components={{ a: GuideLink, table: GuideTable }}
        urlTransform={(url, key) => {
          const safeUrl = defaultUrlTransform(url);
          return safeUrl && key === 'href' ? resolveGuideHref(safeUrl, page, locale) : safeUrl;
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
