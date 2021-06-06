module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "home-pattern": "url('../src/images/home-pattern.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
