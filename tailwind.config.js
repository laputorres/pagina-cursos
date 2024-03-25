/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  changeLang: 'class',
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        'xsm': '639px',
      },
      direction: {
        'rtl': 'rtl',
      },
      colors: {
        custom1: {
          DEFAULT: '#116a3e',
          light: '#0dac5b',
          dark: '#105735'
        },
        customRed: '#ff0000', // Otra forma de definir un color personalizado
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

