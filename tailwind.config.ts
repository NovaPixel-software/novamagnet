import type { Config } from 'tailwindcss';

// NovaMagnet: an indigo-blue brand colour, a magnet-red accent, and cool slate neutrals on white.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3346d3',
        'primary-container': '#4c5ff0',
        'on-primary': '#ffffff',
        'on-primary-container': '#141c5c',
        'primary-fixed': '#e6e9ff',
        'primary-fixed-dim': '#b9c1ff',
        'on-primary-fixed': '#0b1150',
        'on-primary-fixed-variant': '#26339e',
        'inverse-primary': '#b9c1ff',
        'surface-tint': '#3346d3',

        secondary: '#4b5872',
        'on-secondary': '#ffffff',
        'secondary-container': '#e4e8f2',
        'on-secondary-container': '#3c4760',
        'secondary-fixed': '#e4e8f2',
        'secondary-fixed-dim': '#c5cbda',
        'on-secondary-fixed': '#0d1b33',
        'on-secondary-fixed-variant': '#394761',

        // the accent: the red pole of the magnet
        tertiary: '#d2433a',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#f05a4f',
        'on-tertiary-container': '#ffffff',
        'tertiary-fixed': '#ffe4e0',
        'tertiary-fixed-dim': '#ffc2bb',
        'on-tertiary-fixed': '#3b0906',
        'on-tertiary-fixed-variant': '#8c1d17',

        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        background: '#f6f7fb',
        'on-background': '#0e1a33',
        surface: '#f6f7fb',
        'surface-bright': '#ffffff',
        'surface-dim': '#dde1ea',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f1f3f9',
        'surface-container': '#eceff6',
        'surface-container-high': '#e4e8f1',
        'surface-container-highest': '#d8dde9',
        'surface-variant': '#e2e6f0',
        'on-surface': '#0e1a33',
        'on-surface-variant': '#535e75',
        'inverse-surface': '#1b2540',
        'inverse-on-surface': '#eef1fa',
        outline: '#7a859c',
        'outline-variant': '#d9deea',

        navy: '#0e1a33',
      },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', '2xl': '1rem', full: '9999px' },
      boxShadow: {
        card: '0 1px 2px rgba(14, 26, 51, 0.04), 0 4px 16px rgba(14, 26, 51, 0.06)',
        pop: '0 12px 40px rgba(14, 26, 51, 0.16)',
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '0.875rem',
        'space-lg': '1.25rem',
        'space-xl': '1.5rem',
        'gutter-mobile': '0.75rem',
        gutter: '1rem',
        margin: '1.25rem',
        'margin-mobile': '1rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['28px', { lineHeight: '34px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['24px', { lineHeight: '30px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'headline-md': ['18px', { lineHeight: '24px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['15px', { lineHeight: '22px', letterSpacing: '0em', fontWeight: '600' }],
        'body-lg': ['14px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400' }],
        'body-md': ['13px', { lineHeight: '18px', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '400' }],
        'label-lg': ['13px', { lineHeight: '18px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-sm': ['10px', { lineHeight: '12px', letterSpacing: '0.04em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};

export default config;
