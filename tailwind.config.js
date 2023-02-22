/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-black": "#182628",
      "primary-blue": "#65CCB8",
      "primary-cyan": "#57BA98",
      "primary-green": "#3B945E",
      "primary-white": "#F2F2F2",
    },
    extend: {},
  },
  plugins: [],
};
