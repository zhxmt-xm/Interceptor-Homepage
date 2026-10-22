import {
  type ButtonHTMLAttributes,
  cloneElement,
  type ImgHTMLAttributes,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

export function previewImageNode(node: ReactElement, onError: () => void): ReactElement {
  if (!isValidElement<ImgHTMLAttributes<HTMLImageElement>>(node)) {
    throw new Error('Image preview did not provide an image element.');
  }
  return cloneElement<ImgHTMLAttributes<HTMLImageElement> & { 'data-automation-id'?: string }>(
    node,
    {
      'data-automation-id': 'image.preview.image',
      onError: (event) => {
        node.props.onError?.(event);
        onError();
      },
    },
  );
}

export function previewActionNode(node: ReactNode, label: string, name: string): ReactElement {
  if (!isValidElement<ButtonHTMLAttributes<HTMLButtonElement>>(node)) {
    throw new Error(`Image preview did not provide its ${name} action.`);
  }
  return cloneElement<ButtonHTMLAttributes<HTMLButtonElement> & { 'data-automation-id'?: string }>(
    node,
    {
      'aria-label': label,
      'data-automation-id': `image.preview.${name}`,
      title: label,
    },
  );
}
