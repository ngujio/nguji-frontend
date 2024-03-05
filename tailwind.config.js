/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        gray: "#292c2dcc",
      },
      backgroundColor: {
        main: "#111315",
        sec: "#676767",
        bagde: "#C2DBE9",
      },
      textColor: {
        primary: "#111315",
        secondary: "#292C2D",
        tertiary: "#676767",
      },
    },
  },
  plugins: [],
};
