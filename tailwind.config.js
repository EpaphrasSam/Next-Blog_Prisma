/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        LsoftBg: "#f8f8f8",
        DsoftBg: "#1f273a",
        tcolor: "#ddd",
      },
    },
  },
  plugins: [],
};
