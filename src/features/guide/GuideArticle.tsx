import { memo, useLayoutEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import type { Locale } from '../../content';
import { GUIDE_LANGUAGE } from '../../content/guidebook';
import styles from './GuideArticle.module.css';
import type { GuideDocument } from './interfaces';
import { scrollToGuideFragment } from './utils';

interface Props {
  document: GuideDocument;
  locale: Locale;
}

function GuideArticle({ document: guideDocument, locale }: Props) {
  const location = useLocation();
  const markup = useMemo(() => ({ __html: guideDocument.html }), [guideDocument]);
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
      dangerouslySetInnerHTML={markup}
    />
  );
}

export default memo(GuideArticle);
