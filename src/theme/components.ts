import type { ThemeConfig } from 'antd';

export const HEADER_THEME: ThemeConfig = {
  hashed: false,
  cssVar: { key: 'homepage-controls' },
  token: {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    motion: false,
    colorText: 'var(--text-2)',
    colorTextSecondary: 'var(--text-2)',
    colorTextTertiary: 'var(--text-3)',
    colorTextHeading: 'var(--text)',
    colorBgElevated: 'var(--chrome)',
    colorBorder: 'var(--border-2)',
  },
  components: {
    Button: {
      controlHeight: 36,
      colorPrimary: 'var(--accent)',
      colorPrimaryHover: 'color-mix(in srgb, var(--accent) 85%, white)',
      colorPrimaryActive: 'color-mix(in srgb, var(--accent) 85%, black)',
      primaryColor: 'var(--accent-ink)',
    },
    Menu: {
      itemBg: 'transparent',
      subMenuItemBg: 'transparent',
      itemColor: 'var(--text-2)',
      itemHoverColor: 'var(--text)',
      itemHoverBg: 'var(--hover)',
      itemActiveBg: 'var(--hover)',
      itemSelectedBg: 'var(--accent-soft)',
      itemSelectedColor: 'var(--accent)',
      subMenuItemSelectedColor: 'var(--text)',
      activeBarBorderWidth: 0,
    },
  },
};

export const GUIDE_SEARCH_THEME: ThemeConfig = {
  cssVar: { key: 'guide-search' },
  token: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    motion: false,
    colorPrimary: 'var(--accent)',
    colorText: 'var(--text)',
    colorTextHeading: 'var(--text)',
    colorTextSecondary: 'var(--text-2)',
    colorTextTertiary: 'var(--text-3)',
    colorTextQuaternary: 'var(--text-3)',
    colorTextDisabled: 'var(--text-3)',
    colorTextPlaceholder: 'var(--text-3)',
    colorBgContainer: 'var(--panel)',
    colorBgElevated: 'var(--panel)',
    colorBorder: 'var(--border-2)',
    colorFillSecondary: 'var(--hover)',
    borderRadius: 8,
  },
  components: {
    Input: {
      activeBorderColor: 'var(--accent)',
      hoverBorderColor: 'var(--accent)',
      activeShadow: 'none',
    },
    Button: {
      defaultHoverColor: 'var(--accent)',
      defaultHoverBorderColor: 'var(--accent)',
      defaultHoverBg: 'var(--hover)',
    },
    Modal: {
      contentBg: 'var(--panel)',
      headerBg: 'var(--panel)',
    },
  },
};
