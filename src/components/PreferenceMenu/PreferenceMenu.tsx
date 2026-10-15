import { Menu, type MenuProps, type MenuRef, Popover } from 'antd';
import { type KeyboardEvent, type RefAttributes, useEffect, useRef } from 'react';
import Icon from '../Icon/Icon';
import type { IconId } from '../Icon/icons';
import type { PreferenceChoice } from './interfaces';
import styles from './PreferenceMenu.module.css';

interface Props<Value extends string> {
  name: 'theme' | 'language';
  label: string;
  icon: IconId;
  value: Value;
  valueLabel: string;
  choices: readonly PreferenceChoice<Value>[];
  compactLabel?: string;
  inline: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onValueChange: (value: Value) => void;
}

export default function PreferenceMenu<Value extends string>({
  name,
  label,
  icon,
  value,
  valueLabel,
  choices,
  compactLabel,
  inline,
  open,
  onOpenChange,
  onValueChange,
}: Props<Value>) {
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<MenuRef>(null);
  const restoreTriggerFocus = useRef(false);

  useEffect(() => {
    if (!open) {
      if (restoreTriggerFocus.current) {
        restoreTriggerFocus.current = false;
        const element = inline ? menu.current?.menu?.findItem({ key: name }) : trigger.current;
        element?.focus({ preventScroll: true });
      }
      return;
    }
    const frame = requestAnimationFrame(() =>
      menu.current?.menu?.findItem({ key: value })?.focus(),
    );
    return () => cancelAnimationFrame(frame);
  }, [inline, name, open, value]);

  const items = choices.map((choice) => ({
    key: choice.value,
    role: 'menuitemradio',
    'aria-checked': value === choice.value,
    'data-automation-id': `homepage.${name}.${choice.value}`,
    label: choice.label,
    icon: choice.icon ? <Icon name={choice.icon} size={16} /> : undefined,
    extra: value === choice.value ? <Icon name="check" size={16} /> : undefined,
    onClick: () => {
      restoreTriggerFocus.current = true;
      onOpenChange(false);
      onValueChange(choice.value);
    },
    onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => {
      if (event.key === 'Enter' || event.key === ' ') event.stopPropagation();
    },
  }));
  const menuProps: MenuProps & RefAttributes<MenuRef> = {
    ref: menu,
    selectedKeys: [value],
    selectable: true,
    onKeyDownCapture: (event) => {
      if (event.key !== 'Escape' || !open) return;
      event.preventDefault();
      event.stopPropagation();
      restoreTriggerFocus.current = true;
      onOpenChange(false);
    },
  };
  const automationId = name === 'theme' ? 'homepage.theme.toggle' : 'homepage.language';

  if (inline) {
    return (
      <Menu
        {...menuProps}
        mode="inline"
        openKeys={open ? [name] : []}
        onOpenChange={(keys) => onOpenChange(keys.includes(name))}
        className={styles.inline}
        styles={{
          root: { background: 'transparent', border: 0 },
          item: { display: 'flex', alignItems: 'center' },
          itemContent: { display: 'flex', alignItems: 'center', minWidth: 0 },
          subMenu: {
            itemTitle: { display: 'flex', alignItems: 'center' },
            itemContent: { display: 'flex', alignItems: 'center', minWidth: 0 },
            list: { background: 'transparent' },
          },
        }}
        expandIcon={({ isOpen }) => (
          <Icon name="chevronDown" size={14} className={styles.chevron} data-open={isOpen} />
        )}
        items={[
          {
            key: name,
            icon: <Icon name={icon} size={18} className={styles.triggerIcon} />,
            label: (
              <div className={styles.groupLabel} data-automation-id={automationId}>
                <span>{label}</span>
                <span className={styles.value}>{valueLabel}</span>
              </div>
            ),
            children: items,
          },
        ]}
      />
    );
  }

  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
      trigger={['click']}
      placement="bottomRight"
      align={{ offset: [0, 8] }}
      arrow={false}
      destroyOnHidden
      afterOpenChange={(visible) => {
        if (visible) menu.current?.menu?.findItem({ key: value })?.focus();
      }}
      content={
        <Menu
          {...menuProps}
          className={styles.popup}
          items={items}
          aria-label={label}
          styles={{
            root: { background: 'transparent', border: 0 },
            item: { display: 'flex', alignItems: 'center' },
            itemContent: { display: 'flex', alignItems: 'center', minWidth: 0 },
          }}
        />
      }
    >
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        data-labelled={Boolean(compactLabel)}
        aria-label={`${label}: ${valueLabel}`}
        title={`${label}: ${valueLabel}`}
        aria-haspopup="menu"
        aria-expanded={open}
        data-automation-id={automationId}
      >
        <Icon name={icon} size={18} className={styles.triggerIcon} />
        {compactLabel && <span>{compactLabel}</span>}
      </button>
    </Popover>
  );
}
