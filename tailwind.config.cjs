/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'xm':'375px',
      'xsl':'425px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}