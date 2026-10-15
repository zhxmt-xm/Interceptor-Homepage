import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { memo, useLayoutEffect, useMemo } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useLocation } from 'react-router-dom';
import type { Locale } from '../../content';
import { GUIDE_LANGUAGE, type GuidePageId } from '../../content/guidebook';
import styles from './GuideArticle.module.css';
import GuideImage from './GuideImage';
import GuideLink from './GuideLink';
import GuideTable from './GuideTable';
import GuideVideo from './GuideVideo';
import type { GuideDocument } from './interfaces';
import { resolveGuideTree, scrollToGuideFragment } from './utils';

interface Props {
  page: GuidePageId;
  document: GuideDocument;
  locale: Locale;
}

function GuideArticle({ page, document: guideDocument, locale }: Props) {
  const location = useLocation();
  const content = useMemo(
    () =>
      toJsxRuntime(resolveGuideTree(guideDocument.tree, page, locale), {
        Fragment,
        jsx,
        jsxs,
        components: { a: GuideLink, img: GuideImage, table: GuideTable, video: GuideVideo },
      }),
    [guideDocument, page, locale],
  );

  useLayoutEffect(() => {
    if (!location.hash) return;
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
  }, [guideDocument, location.hash]);

  return (
    <article
      className={styles.article}
      lang={GUIDE_LANGUAGE[locale]}
      data-automation-id="guide.article"
    >
      {content}
    </article>
  );
}

export default memo(GuideArticle);
