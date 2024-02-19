/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        search: "url('/search.svg')"
      },
      keyframes: {
        openMenu: {
          '0%': { height: '0px' },
          '100%': { height: 'auto' }
        }
      }
    }
  },
  plugins: []
}
