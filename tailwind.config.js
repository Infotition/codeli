module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#9ED1F3',
        bg: {
          light: '#FAFAFA',
          dark: '#292D3E',
        },
        bg2: {
          dark: '#262A3B',
        },
        text: {
          light: '#02203C',
          dark: '#FFFFFF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
