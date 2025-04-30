module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rye)', 'Arial', 'sans-serif'], // Body text
        title: ['var(--font-rye)', 'Cormorant Garamond', 'serif'], // Titles
      },
      colors: {
        nautical: "#092c3c",
        blush: "#c69693",
        antique: "#e7c5b1"
      }
    },
  },
  plugins: [],
}