module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'betterhover': {'raw': '(hover: hover)'},
      },
    },
  },
  plugins: [],
}


