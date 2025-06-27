import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-image': "url('https://firebasestorage.googleapis.com/v0/b/alican-94ff5.appspot.com/o/freeacces%2Fimagen_portada.png?alt=media')",
        'logo-image-mobile': "url('https://firebasestorage.googleapis.com/v0/b/alican-94ff5.appspot.com/o/freeacces%2F18537.jpg?alt=media')",
        'login-image': "url('https://firebasestorage.googleapis.com/v0/b/alican-94ff5.appspot.com/o/freeacces%2Fportrait-dog.jpg?alt=media')",
      },
      height: {
        128: '32rem',
        132: '33rem',
        148: '37rem',
      },
      colors: {
        black: { 500: '#000000' },
        primary: {
          50: '#e6f2f2',
          100: '#cce5e5',
          200: '#99cccc',
          300: '#66b2b2',
          400: '#339999',
          500: '#007f7f',
          600: '#006666',
          700: '#004c4c',
          800: '#003333',
          900: '#001919',
          DEFAULT: '#007f7f',
        },
        secondary: {
          50: '#7c7c7c',
          100: '#707070',
          200: '#636363',
          300: '#575757',
          400: '#4a4a4a',
          500: '#7ED9D9',
          600: '#323232',
          700: '#252525',
          800: '#191919',
          900: '#0c0c0c',
          DEFAULT: '#7ED9D9',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              50: '#0088cc',
              100: '#007ab8',
              200: '#006da3',
              300: '#005f8f',
              400: '#00527a',
              500: '#115259',
              600: '#1BCCE3',
              700: '#00293d',
              800: '#001b29',
              900: '#000e14',
              DEFAULT: '#115259',
            },
            secondary: {
              50: '#7c7c7c',
              100: '#707070',
              200: '#636363',
              300: '#575757',
              400: '#4a4a4a',
              500: '#7ED9D9',
              600: '#323232',
              700: '#252525',
              800: '#191919',
              900: '#0c0c0c',
              DEFAULT: '#7ED9D9',
            },
          },
        },
        dark: {
          colors: {
            primary: '#7ED9D9',
          },
        },
      },
    }),
  ],
  corePlugins: {
    scrollBehavior: true,
  },
};

export default config;
