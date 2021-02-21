const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './_site/**/*.html',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,  
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      monospace: ['Roboto Mono', 'monospace'],
    },
    extend: {}
  },
  variants: {},
  plugins: [],
}

