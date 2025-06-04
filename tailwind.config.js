import { heroui } from '@heroui/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/{button,ripple,spinner}.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontSize: {
        large: '2rem',
        mediam: '1.25rem',
        tiney: '0.75rem',
      },
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