/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pastel-yellow-1": "#FFEDED",
        "pastel-yellow-2": "#FFF8E3",
        "pastel-pink": "#E6A4B4",
        "pastel-cyan": "#7BD3EA",
        "custom-cyan": "#40A2E3",
        "light-black-1": "#252A32",
        "light-black-2": "#61666E",
        "pastel-brown-1": "#C59B68",
        "pastel-brown-2": "#D9AF7C",
        "dark-brown-1": "#472D2D",
        "dark-brown-2": "#9D7340",
        "light-gray": "#D9D9D9",
        "steel-gray": "#D3E1E7",
        "dark-cyan": "#5DB5CC",
        "custom-blue": "#536CF6",
        "custom-green": "#FF4948",
        "cream": "#F5EEE6",
        "dark-steal": "#9BB8CD",
        "skin": "#F3D7CA"
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require("@xpd/tailwind-3dtransforms")
  ],
};
