import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
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
          50: '#ffeaea',
          100: '#ffc9c9',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000', // Rojo Pokémon
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
          DEFAULT: '#ff0000',
        },
        secondary: {
          50: '#fffce6',
          100: '#fff7bf',
          200: '#fff28f',
          300: '#ffed5f',
          400: '#ffe82f',
          500: '#ffe000', // Amarillo Pikachu
          600: '#ccb400',
          700: '#998700',
          800: '#665a00',
          900: '#332d00',
          DEFAULT: '#ffe000',
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
