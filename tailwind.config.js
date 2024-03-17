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
      sans: ['Open Sans', 'sans-serif'], // Agrega tu fuente preferida aquí
    },
    extend: {
      screens: {
        'xsm': '639px',
      },
      direction: {
        'rtl': 'rtl', // Agrega la clase 'rtl' para dirección de derecha a izquierda
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

