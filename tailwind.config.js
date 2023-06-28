/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontSize:{
        xxs : ['11px', '40px'],
        ts : ['14px', '40px']
      },

      colors: {
        blue_btn : "#0067b8",
        link_bg : "#f2f2f2"
      }
    },
  },
  plugins: [],
}

