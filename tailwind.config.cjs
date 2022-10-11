/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-elements": "hsl(209, 23%, 22%)",
        "dark-blue-background": "hsl(207, 26%, 17%)",
        "dark-blue-text": "hsl(200, 15%, 8%)",
        "light-background": "hsl(0, 0%, 98%)",
        "light-text-element": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
