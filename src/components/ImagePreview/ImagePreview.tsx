import { ConfigProvider, Image } from 'antd';
import { TriangleAlert, X } from 'lucide-react';
import { cloneElement, useState } from 'react';
import type { WebsiteCopy } from '../../content';
import styles from './ImagePreview.module.css';
import type { PreviewImage } from './interfaces';
import { previewActionNode, previewImageNode } from './utils';

interface Props {
  image: PreviewImage;
  content: WebsiteCopy['imagePreview'];
  onClose: () => void;
}

export default function ImagePreview({ image, content, onClose }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <ConfigProvider theme={{ token: { fontFamily: 'var(--font-sans)', motion: false } }}>
      <Image.PreviewGroup
        items={[{ src: image.source, alt: image.alt }]}
        preview={{
          open: true,
          onOpenChange: (open) => {
            if (!open) onClose();
          },
          countRender: () => null,
          closeIcon: <X role="img" aria-label={content.close} />,
          imageRender: (node) =>
            failed ? (
              <div className={styles.error} role="alert" data-automation-id="image.preview.error">
                <TriangleAlert size={24} aria-hidden="true" />
                <p>{content.error}</p>
                <p className={styles.hint}>{content.errorHint}</p>
              </div>
            ) : (
              previewImageNode(node, () => setFailed(true))
            ),
          actionsRender: (node, { icons }) =>
            failed
              ? null
              : cloneElement(
                  node,
                  undefined,
                  previewActionNode(icons.flipYIcon, content.flipY, 'flipY'),
                  previewActionNode(icons.flipXIcon, content.flipX, 'flipX'),
                  previewActionNode(icons.rotateLeftIcon, content.rotateLeft, 'rotateLeft'),
                  previewActionNode(icons.rotateRightIcon, content.rotateRight, 'rotateRight'),
                  previewActionNode(icons.zoomOutIcon, content.zoomOut, 'zoomOut'),
                  previewActionNode(icons.zoomInIcon, content.zoomIn, 'zoomIn'),
                ),
        }}
      />
    </ConfigProvider>
  );
}
