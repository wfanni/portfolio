/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: '#ff5d30',
        green: '#6EEB83',
        dark: '#20063B',
      }
    },
  },
  plugins: [],
}

