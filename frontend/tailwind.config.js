plugins: [
  require('tailwind-scrollbar'),
],

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded']
  }
}