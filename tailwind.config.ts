import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['72px', { lineHeight: '96px', letterSpacing: '-1.6px' }],
        'heading-2': ['56px', { lineHeight: '68px', letterSpacing: '-1.2px' }],
        'heading-3': ['40px', { lineHeight: '48px', letterSpacing: '-0.8px' }],
        'body-xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.3px' }],
        'body-lg': ['20px', { lineHeight: '28px', letterSpacing: '-0.2px' }],
        'body-md': ['16px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
        'body-sm': ['14px', { lineHeight: '20px', letterSpacing: '-0.1px' }],
        'body-xs': ['12px', { lineHeight: '16px', letterSpacing: '0px' }],
      },
      colors: {
        background: 'var(--background)',
        text: {
          bold: '#11181C',
          light: '#71717A',
        },
        highlighted: '#F4F4F5',
        disabled: '#dbf8cf',
        iconBackground: '#D4D4D8',
        main: '#47C826',
        lima: {
          '50': '#eefce9',
          '100': '#dbf8cf',
          '200': '#b8f2a4',
          '300': '#8be76f',
          '400': '#64d843',
          '500': '#47c826',
          '600': '#319719',
          '700': '#277417',
          '800': '#235c18',
          '900': '#214e19',
          '950': '#0c2b08',
        },
        shark: {
          '50': '#f5f6f6',
          '100': '#e5e7e8',
          '200': '#ced1d3',
          '300': '#abafb5',
          '400': '#82888e',
          '500': '#676d73',
          '600': '#585c62',
          '700': '#4b4e53',
          '800': '#424548',
          '900': '#3a3c3f',
          '950': '#1d1e20',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      addCommonColors: false,
      themes: {
        'lima-theme': {
          extend: 'light',
          colors: {
            background: '#FFFFFF',
            foreground: '#11181C',
            primary: {
              50: '#eefce9',
              100: '#dbf8cf',
              200: '#b8f2a4',
              300: '#8be76f',
              400: '#64d843',
              500: '#47c826',
              600: '#319719',
              700: '#277417',
              800: '#235c18',
              900: '#0c2b08',
              DEFAULT: '#47c826',
              foreground: '#FFFFFF',
            },
            focus: '#8be76f',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
export default config;
