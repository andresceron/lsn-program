/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          lightest: '#3D458F',
          light: '#2A3165',
          DEFAULT: '#181b38',
          dark: '#12152B',
          darkest: '#0C0E1D',
        },
        secondary: {
          light: '#ffffff',
          DEFAULT: '#e0f0fd',
          dark: '#A0D0F8',
        },
        gray: {
          // lightest: '#F7F6F3',
          light: '#EEECE7',
          DEFAULT: '#DFDAD0',
          dark: '#BEB29D',
          // darkest: '#928363'
        },
        white: {
          DEFAULT: '#f8f8f8',
        }
      },
    }
  },
  plugins: [],
  prefix: 'tw-',
}
