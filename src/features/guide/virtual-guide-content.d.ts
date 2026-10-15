declare module 'virtual:guidebook-content/zh' {
  const documents: import('./interfaces').GuideDocuments;
  export default documents;
}

declare module 'virtual:guidebook-content/en' {
  const documents: import('./interfaces').GuideDocuments;
  export default documents;
}

declare module 'virtual:guidebook-media' {
  const media: Readonly<Record<string, string>>;
  export default media;
}
