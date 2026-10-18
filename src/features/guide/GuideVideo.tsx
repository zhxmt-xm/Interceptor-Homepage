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
  const [videoSource, setVideoSource] = useState<{ source: string; url: string }>();
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

  useEffect(() => {
    if (!loadRequested || !src) return;
    const controller = new AbortController();
    let objectUrl: string | undefined;
    void fetch(src, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Guide video request failed: ${response.status}`);
        return response.blob();
      })
      .then((blob) => {
        if (controller.signal.aborted) return;
        objectUrl = URL.createObjectURL(blob);
        setVideoSource({ source: src, url: objectUrl });
        setFailed(false);
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        console.error('Unable to load guide video', error);
        setFailed(true);
      });
    return () => {
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [loadRequested, src]);

  return (
    <div className={styles.media}>
      <video
        ref={video}
        controls
        playsInline
        preload="metadata"
        width={1600}
        height={900}
        src={videoSource?.source === src ? videoSource?.url : undefined}
        poster={loadRequested ? poster : undefined}
        title={title}
        lang={lang}
        onError={() => setFailed(true)}
        onLoadedMetadata={() => setFailed(false)}
      >
        {loadRequested ? children : null}
      </video>
      {(failed || (loadRequested && !src)) && (
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
