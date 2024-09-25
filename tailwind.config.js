/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Gloock': ['Gloock', 'sans-serif'],
      },
      colors:{
        'st-accent-brown':'#8C4D33',
        'st-light-brown':'#FFF2ED',
        'st-mild-brown':'#F4F0F0',
        'st-mid-brown':'#8C4D33',
        'st-dark-brown':'#531A02'
      }
    },
  },
  plugins: [],
}

