module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          background: 'hsl(0, 0%, 98%)',
          element: 'hsl(0, 0%, 100%)',
          text: 'hsl(200, 15%, 8%)',
          shadow: 'hsl(209, 23%, 85%)',
        },
        dark: {
          background: 'hsl(207, 26%, 17%)',
          element: 'hsl(209, 23%, 22%)',
          text: 'hsl(0, 0%, 100%)',
          shadow: 'hsl(209, 23%, 15%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
