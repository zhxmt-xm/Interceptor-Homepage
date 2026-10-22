export interface PreviewImage {
  source: string;
  alt: string;
}

export type ImagePreviewState =
  | { open: false }
  | { open: true; image: PreviewImage; trigger: HTMLButtonElement };
