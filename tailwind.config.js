module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: { 'half-minus-2rem': 'calc(50% - 2rem)' },
      backgroundImage: {
        'sand-texture': "url('/images/sandpaper.png')",
      },
      fontFamily: {
        sans: ['var(--font-rye)', 'Arial', 'sans-serif'], // Body text
        title: ['var(--font-rye)', 'Cormorant Garamond', 'serif'], // Titles
      },
      colors: {
        nautical: '#0A2E42',
        blush: '#c69693',
        antique: '#DCCCB6',
        'muted-sand': '#F2E3C0',
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgba(10, 46, 66, 0.1), 0 4px 6px -2px rgba(10, 46, 66, 0.05)',
        xl: '0 20px 25px -5px rgba(10, 46, 66, 0.1), 0 10px 10px -5px rgba(10, 46, 66, 0.04)',
      },
      transitionProperty: {
        shadow: 'box-shadow',
      },
    },
  },
  plugins: [],
};
