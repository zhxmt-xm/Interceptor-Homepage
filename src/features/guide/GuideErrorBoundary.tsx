import { Component, type ReactNode } from 'react';
import type { Locale } from '../../content';
import { GUIDE_UI } from '../../content/guidebook';
import styles from './GuideErrorBoundary.module.css';

interface Props {
  children: ReactNode;
  locale: Locale;
  resetKey: string;
}

/** React's render-error lifecycle requires a class boundary around suspended chapter loads. */
export default class GuideErrorBoundary extends Component<Props, { failed: boolean }> {
  override state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  override componentDidCatch(error: Error): void {
    console.error('Guidebook content could not be loaded.', error);
  }

  override componentDidUpdate(previous: Props): void {
    if (this.state.failed && previous.resetKey !== this.props.resetKey) {
      this.setState({ failed: false });
    }
  }

  override render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    const copy = GUIDE_UI[this.props.locale];
    return (
      <main
        id="main-content"
        className={styles.error}
        role="alert"
        data-automation-id="guide.error"
      >
        <h1>{copy.loadError}</h1>
        <p>{copy.loadErrorHint}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          data-automation-id="guide.retry"
        >
          {copy.retry}
        </button>
      </main>
    );
  }
}
