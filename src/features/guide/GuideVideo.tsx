import { type ComponentProps, useEffect, useRef, useState } from 'react';
import styles from './GuideVideo.module.css';

export default function GuideVideo({
  src,
  poster,
  lang,
  children,
  title,
}: ComponentProps<'video'>) {
  const video = useRef<HTMLVideoElement>(null);
  const [loadRequested, setLoadRequested] = useState(false);
  const [failed, setFailed] = useState(false);
  const english = lang === 'en';

  useEffect(() => {
    if (!video.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setLoadRequested(true);
        observer.disconnect();
      },
      { rootMargin: '600px' },
    );
    observer.observe(video.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.media}>
      <video
        ref={video}
        controls
        playsInline
        preload="metadata"
        width={1600}
        height={900}
        src={loadRequested ? src : undefined}
        poster={loadRequested ? poster : undefined}
        title={title}
        lang={lang}
        onError={() => setFailed(true)}
        onLoadedMetadata={() => setFailed(false)}
      >
        {loadRequested ? children : null}
      </video>
      {failed && (
        <p className={styles.error} role="alert">
          {english ? 'The video could not be loaded. ' : '视频未能加载。'}
          <a href={src} target="_blank" rel="noopener noreferrer">
            {english ? 'Open the video file' : '单独打开视频文件'}
          </a>
        </p>
      )}
    </div>
  );
}
