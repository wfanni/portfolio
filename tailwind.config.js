/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"', 'sans-serif'],
    },
    fontSize: {
      base: '1.4rem',
    },
    extend: {
      backgroundImage: {
        'intro': "url('/src/assets/bg-1.svg')",
        'about': "url('/src/assets/bg-12.svg')",
        'skills': "url('/src/assets/bg-2.svg')",
        'projects': "url('/src/assets/bg-32.svg')",
        'contact': "url('/src/assets/contact-bg-1.svg')",
      },
      screens: {
        'xs': '320px',
      },
      colors: {
        orange: '#ff5d30',
        green: '#6EEB83',
        dark: '#20063B',
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.5s',
        fadeInLeftXL: 'fadeInLeftXL 0.5s',
        fadeInRight: 'fadeInRight 0.5s 1.2s',
        fadeInRightXL: 'fadeInRightXL 0.5s 1.2s',
      },
      keyframes: {
        fadeInLeft: {
          'from': { opacity: 0, transform: 'translate3d(-100%, 0, 0)'},
          '50%': { opacity: 1, transform: 'translate3d(5vh, 0, 0)'},
          'to': { opacity: 1, transform: 'translate3d(0, 0, 0)'}

        },
        fadeInRight: {
          'from': { opacity: 0, transform: 'translate3d(100%, 3.5rem, 0)'},
          '50%': { opacity: 1, transform: 'translate3d(-5vh, 3.5rem, 0)'},
          'to': { opacity: 1, transform: 'translate3d(0, 3.5rem, 0)'}
        },
        fadeInLeftXL: {
          'from': { opacity: 0, transform: 'translate3d(-100%, 0, 0)'},
          '50%': { opacity: 1, transform: 'translate3d(-180px, 0, 0)'},
          'to': { opacity: 1, transform: 'translate3d(-210px, 0, 0)'}

        },
        fadeInRightXL: {
          'from': { opacity: 0, transform: 'translate3d(100%, 3.5rem, 0)'},
          '50%': { opacity: 1, transform: 'translate3d(210px, 3.5rem, 0)'},
          'to': { opacity: 1, transform: 'translate3d(240px, 3.5rem, 0)'}
        }
      }
    },
  },
  plugins: [],
}

