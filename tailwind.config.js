import { heroui } from '@heroui/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|input|navbar|ripple|spinner|form).js"
],
  theme: {
    extend: {
      colors: {
        primary: '#023047',
        secondary: '#219EBC',
        tertiary: '#8ECAE6',
        yellow: '#FFB703',
        orange: '#FB8500',
        text: '#023047',
      },
    },
  },
  plugins: [heroui()],
}