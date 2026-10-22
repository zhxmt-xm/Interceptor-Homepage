import { Button, ConfigProvider, Input, type InputRef, Modal } from 'antd';
import { ArrowRight, BookOpen, FileText, Search } from 'lucide-react';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { Locale } from '../../../content';
import { GUIDE_UI } from '../../../content/guidebook';
import { GUIDE_SEARCH_THEME } from '../../../theme/components';
import { searchGuide } from '../utils';
import styles from './GuideSearchDialog.module.css';
import { highlightGuideSearch } from './utils';

interface Props {
  open: boolean;
  query: string;
  locale: Locale;
  onQuery: (query: string) => void;
  onClose: () => void;
  onAfterClose: () => void;
  onSelect: (href: string) => void;
}

export default function GuideSearchDialog({
  open,
  query,
  locale,
  onQuery,
  onClose,
  onAfterClose,
  onSelect,
}: Props) {
  const copy = GUIDE_UI[locale].search;
  const inputRef = useRef<InputRef>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const results = useMemo(() => searchGuide(query, locale), [query, locale]);
  const selectedIndex = Math.min(activeIndex, results.length - 1);

  useEffect(() => {
    if (open)
      listRef.current
        ?.querySelector('[aria-selected="true"]')
        ?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }, [open, selectedIndex, query, locale]);

  return (
    <ConfigProvider theme={GUIDE_SEARCH_THEME} componentSize="middle">
      <Modal
        open={open}
        title={copy.title}
        width={680}
        footer={null}
        onCancel={onClose}
        afterClose={onAfterClose}
        focusable={{ focusTriggerAfterClose: false }}
        closable={{ 'aria-label': copy.close }}
        afterOpenChange={(visible) => {
          if (visible) {
            setActiveIndex(0);
            inputRef.current?.focus({ preventScroll: true, cursor: 'all' });
          }
        }}
        className={styles.dialog}
        classNames={{ body: styles.body }}
        style={{ top: 'var(--guide-search-top)', maxWidth: '100%', margin: '0 auto' }}
        styles={{
          wrapper: { padding: '16px' },
          container: { padding: 'var(--guide-search-padding)' },
        }}
      >
        <div data-automation-id="guide.search.dialog" className={styles.content}>
          <Input
            ref={inputRef}
            value={query}
            size="large"
            allowClear
            prefix={<Search size={18} />}
            placeholder={copy.placeholder}
            aria-label={copy.title}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={Boolean(results.length)}
            aria-controls={listId}
            aria-activedescendant={selectedIndex >= 0 ? `${listId}-${selectedIndex}` : undefined}
            data-automation-id="guide.search.input"
            onChange={(event) => {
              setActiveIndex(0);
              onQuery(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.nativeEvent.isComposing) return;
              if (results.length && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
                event.preventDefault();
                setActiveIndex(
                  (selectedIndex + (event.key === 'ArrowDown' ? 1 : -1) + results.length) %
                    results.length,
                );
              }
              if (event.key === 'Enter' && results[selectedIndex]) {
                event.preventDefault();
                onSelect(results[selectedIndex].href);
              }
            }}
          />
          <div className={styles.summary}>
            <span>{copy.scope}</span>
            <span role="status" data-automation-id="guide.search.count" data-count={results.length}>
              {query.trim() ? `${results.length} ${copy.results}` : ''}
            </span>
          </div>
          <div
            className={styles.results}
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label={copy.title}
          >
            {results.map((result, index) => (
              <a
                key={result.href}
                href={result.href}
                id={`${listId}-${index}`}
                className={styles.result}
                role="option"
                aria-selected={index === selectedIndex}
                tabIndex={-1}
                data-automation-id="guide.search.result"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  event.preventDefault();
                  onSelect(result.href);
                }}
              >
                <FileText size={18} />
                <div className={styles.resultCopy}>
                  <small>
                    {result.chapter}
                    {result.step !== undefined ? ` · ${copy.step} ${result.step}` : ''}
                  </small>
                  <strong>
                    {highlightGuideSearch(result.title, query).map((part, partIndex) =>
                      part.matched ? <mark key={partIndex}>{part.text}</mark> : part.text,
                    )}
                  </strong>
                  <p>
                    {highlightGuideSearch(result.excerpt, query).map((part, partIndex) =>
                      part.matched ? <mark key={partIndex}>{part.text}</mark> : part.text,
                    )}
                  </p>
                </div>
                <ArrowRight size={16} />
              </a>
            ))}
          </div>
          {!results.length && (
            <div className={styles.empty} data-automation-id="guide.search.empty">
              {query.trim() ? <Search size={28} /> : <BookOpen size={28} />}
              <strong>{query.trim() ? copy.noResults : copy.empty}</strong>
              <p>{query.trim() ? copy.retry : copy.hint}</p>
              {!query.trim() && (
                <div className={styles.examples} data-automation-id="guide.search.examples">
                  {copy.examples.map((example, index) => (
                    <Button
                      key={example}
                      data-automation-id={`guide.search.example.${index}`}
                      onClick={() => {
                        setActiveIndex(0);
                        onQuery(example);
                        inputRef.current?.focus({ preventScroll: true });
                      }}
                    >
                      {example}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}
          <div className={styles.footer}>
            <span>
              <kbd>↑ ↓</kbd>
              {copy.navigate}
            </span>
            <span>
              <kbd>Enter</kbd>
              {copy.open}
            </span>
            <span>
              <kbd>Esc</kbd>
              {copy.close}
            </span>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
}
