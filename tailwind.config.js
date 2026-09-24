/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-garamond)", "serif"],
        dancing: ["var(--font-dancing)", "cursive"],
      },
      colors: {
        background: "var(--background)",
        dark: "var(--dark)",
        burgundy: "var(--burgundy)",
        accent: "var(--accent)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)"
      }
    }
  },
  plugins: []
};
