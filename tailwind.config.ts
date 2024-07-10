import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1170px',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '1' }],
      sm: ['14px', { lineHeight: '1' }],
      base: ['16px', { lineHeight: '1' }],
      base2: ['18px', { lineHeight: '1' }],
      lg: ['22px', { lineHeight: '1' }],
      xl: ['24px', { lineHeight: '1' }],
      '2xl': ['40px', { lineHeight: '2rem' }],
      '5xl': ['64px', { lineHeight: '1' }],
      '9xl': ['200px', { lineHeight: '1' }],
    },
    lineHeight: {
      none: '1',
      snug: '1.25',
      normal: '1.5625',
      relaxed: '1.6363',
      loose: '1.714',
    },
    letterSpacing: {
      normal: '0em',
      wide: '0.03em',
      wider: '0.04em',
      widest: '0.2em',
    },
    extend: {
      fontFamily: {
        serif: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        't-white': 'rgba(255, 255, 255, 0.7)',
        'black-33': '#333333',
        'black-2c': '#2C2C2C',
        'gray-f2': '#F2F2F2',
        'gray-f3': '#F3F3F3',
        'gray-c8': '#C8C8C8',
        'gray-bd': '#BDBDBD',
        'gray-dark': '#8D8D8D',
        't-black': 'rgba(44,44,44, 0.85)',
      },
      margin: {
        '120px': '120px',
      },
      boxShadow: {
        '2xl-inner': '-12px -8px 40px rgba(255,0,0,0.12) inset;',
        '3xl':
          '0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset -12px -8px 40px rgba(255, 255, 255, 0.25)',
        '3xl-dark':
          '0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset -12px -8px 40px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        wider: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        showUp: {
          '0%': { display: 'none', transform: 'translateY(-100%)', opacity: '0' },
          '100%': { display: 'block', transform: 'translateY(0)', opacity: '1' },
        },
        showOff: {
          '0%': { display: 'block' },
          '100%': { display: 'none' },
        },
      },
      animation: {
        'gradually-width': 'wider .3s linear',
        'show-up': 'showUp 0.3s linear',
        'show-off': 'showOff 0.3s linear',
      },
    },
  },
  plugins: [],
};
export default config;