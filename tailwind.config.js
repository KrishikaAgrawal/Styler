/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gloock: ["Gloock", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "st-accent-brown": "#8C4D33",
        "st-light-brown": "#FFF2ED",
        "st-mild-brown": "#F4F0F0",
        "st-mid-brown": "#8C4D33",
        "st-dark-brown": "#531A02",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 60px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     ".custom-checkbox": {
    //       "@apply appearance-none w-4 h-4 border border-gray-300 rounded": {},
    //     },
    //     ".custom-checkbox:checked": {
    //       "@apply bg-[#531A02] border-[#531A02]": {},
    //     },
    //   });
    // },
  ],
};
