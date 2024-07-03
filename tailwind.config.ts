import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1170px',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '1' }],
      sm: ['14px', { lineHeight: '1' }],
      base: ['16px', { lineHeight: '1' }],
      lg: ['22px', { lineHeight: '1' }],
      xl: ['24px', { lineHeight: '1' }],
      '2xl': ['40px', { lineHeight: '2rem' }],
      '5xl': ['64px', { lineHeight: '1' }],
      '9xl': ['200px', { lineHeight: '1' }],
    },
    lineHeight: {
      none: '1',
      snug: "1.25",
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
        serif: [
          '"Roboto"',
          'sans-serif',
        ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black-33': "#333333",
        'black-2c': "#2C2C2C",
        "gray-f2": "#F2F2F2",
        "gray-f3": "#F3F3F3",
        "gray-c8": "#C8C8C8",
        "gray-bd": "#BDBDBD",
      },
      margin: {
        "120px": "120px",
      },
      keyframes: {
        wider: {
          '0%': {width: '0%'},
          "100%": {width: '100%'},
        }
      },
      animation: {
        'gradually-width': 'wider .3s linear'
      },
    },
  },
  plugins: [],
};
export default config;
