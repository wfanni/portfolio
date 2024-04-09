/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#ff5d30',
        green: '#6EEB83',
        dark: '#20063B',
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.5s',
        fadeInRight: 'fadeInRight 0.5s 1.2s'
      },
      keyframes: {
        fadeInLeft: {
          'from': { opacity: 0, transform: 'translate3d(-100%, 0, 0)'},
          'to': { opacity: 1, transform: 'translate3d(-260px, 0, 0)'}
        },
        fadeInRight: {
          'from': { opacity: 0, transform: 'translate3d(100%, 3.5rem, 0)'},
          'to': { opacity: 1, transform: 'translate3d(293px, 3.5rem, 0)'}
        }
      }
    },
  },
  plugins: [],
}

