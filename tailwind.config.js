/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'], // Agrega tu fuente preferida aquí
    },
    extend: {
      screens: {
        'xsm': '639px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

