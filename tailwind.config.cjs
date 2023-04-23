/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'purpleColor': '#8c12f0',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
}
