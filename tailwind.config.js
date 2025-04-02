/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enables dark mode via class strategy
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // adjust if your structure is different
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slight': 'bounce-slight 0.4s ease',
      },
      keyframes: {
        'bounce-slight': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
};
