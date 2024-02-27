const plugin = require('tailwindcss/plugin');
const { blackA, mauve, violet, indigo, purple } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,html}',
    './public/**/*.{ts,tsx,html}',
    './components/**/*.{ts,tsx,html}'
  ]
};