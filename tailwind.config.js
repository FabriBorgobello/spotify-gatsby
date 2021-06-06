module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "home-pattern": "url('../src/images/home-pattern.svg')",
        "home-pattern-xl": "url('../src/images/home-pattern-xl.svg')",
      }),
      colors: {
        blue: {
          light: "#2941ab",
          DEFAULT: "#2d56b9",
        },
        green: {
          light: "#9bf0e1",
          DEFAULT: "#1ed760",
        },
        gray: {
          light: "#91946",
          DEFAULT: "#222326",
        },
      },
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
