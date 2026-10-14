import { useEffect, useRef, useState } from 'react';
import type { WebsiteCopy } from '../../content';
import type { ThemePreference } from '../../theme/utils';
import Icon from '../Icon/Icon';
import styles from './ThemeSwitcher.module.css';

interface Props {
  content: WebsiteCopy['nav']['theme'];
  preference: ThemePreference;
  onPreferenceChange: (preference: ThemePreference) => void;
  onOpen: () => void;
}

export default function ThemeSwitcher({ content, preference, onPreferenceChange, onOpen }: Props) {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]')?.focus();
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      trigger.current?.focus();
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div
      ref={container}
      className={styles.switcher}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-label={`${content.label}: ${content[preference]}`}
        title={`${content.label}: ${content[preference]}`}
        aria-expanded={open}
        aria-controls="homepage-theme-options"
        data-automation-id="homepage.theme.toggle"
        onClick={() => {
          if (!open) onOpen();
          setOpen((current) => !current);
        }}
      >
        <Icon
          name={preference === 'system' ? 'monitor' : preference === 'light' ? 'sun' : 'moon'}
          size={18}
        />
      </button>
      {open && (
        <div
          ref={panel}
          id="homepage-theme-options"
          role="group"
          aria-label={content.label}
          className={styles.panel}
        >
          <p className={styles.label}>{content.label}</p>
          {(['system', 'light', 'dark'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              className={styles.option}
              aria-pressed={preference === mode}
              data-automation-id={`homepage.theme.${mode}`}
              onClick={() => {
                onPreferenceChange(mode);
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              <Icon
                name={mode === 'system' ? 'monitor' : mode === 'light' ? 'sun' : 'moon'}
                size={16}
              />
              <span>{content[mode]}</span>
              {preference === mode && <Icon name="check" size={15} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
