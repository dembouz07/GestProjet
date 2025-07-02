/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFBF5',
        'orange-lightest': '#F7CB8D',
        'orange-light': '#E4A144',
        'orange-medium': '#BD7B1D',
        'orange-dark': '#87540E',
        'brown-dark': '#000000',
        'brown-medium': '#872A0E',
        'brown-light': '#BD431D',
        'peach-medium': '#E46944',
        'peach-light': '#F7A68D',
        'peach-lightest': '#FFF7F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};