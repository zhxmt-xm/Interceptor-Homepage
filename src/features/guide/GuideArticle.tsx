import { memo, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import type { Locale } from '../../content';
import { GUIDE_LANGUAGE } from '../../content/guidebook';
import styles from './GuideArticle.module.css';
import GuideVideo from './GuideVideo';
import type { GuideDocument } from './interfaces';
import { scrollToGuideFragment } from './utils';

interface Props {
  document: GuideDocument;
  locale: Locale;
}

function GuideArticle({ document: guideDocument, locale }: Props) {
  const location = useLocation();
  const markup = useMemo(() => ({ __html: guideDocument.html }), [guideDocument]);
  const [videoContainers, setVideoContainers] = useState<HTMLElement[]>([]);
  const bindArticle = useCallback(
    (article: HTMLElement | null) => {
      if (!article) return;
      const containers = Array.from(article.querySelectorAll<HTMLElement>('[data-guide-video]'));
      if (containers.length !== guideDocument.videos.length)
        throw new Error('Compiled guidebook video slots do not match their metadata.');
      setVideoContainers(containers);
    },
    [guideDocument],
  );

  useLayoutEffect(() => {
    if (!location.hash || videoContainers.length !== guideDocument.videos.length) return;
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
  }, [guideDocument, location.hash, videoContainers]);

  return (
    <>
      <article
        ref={bindArticle}
        className={styles.article}
        lang={GUIDE_LANGUAGE[locale]}
        data-automation-id="guide.article"
        dangerouslySetInnerHTML={markup}
      />
      {guideDocument.videos.map((video, index) => {
        const container = videoContainers[index];
        return container
          ? createPortal(
              <GuideVideo {...video.attributes}>
                {video.tracks.map((track) => (
                  <track key={track.src} {...track} />
                ))}
              </GuideVideo>,
              container,
              String(index),
            )
          : null;
      })}
    </>
  );
}

export default memo(GuideArticle);
