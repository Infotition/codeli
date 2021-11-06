module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9ED1F3',
        bg: {
          light: '#FAFAFA',
          dark: '#292D3E',
        },
        bg2: {
          light: '#FFFFFF',
          dark: '#262A3B',
        },
        bg3: {
          light: '#F6F9FC',
          dark: '#313446',
        },
        text: {
          light: '#02203C',
          dark: '#FFFFFF',
        },
        text2: {
          light: '#808080',
          dark: '#BFBEBE',
        },
        hr: '#C4C4C4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
