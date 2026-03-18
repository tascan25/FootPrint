/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bubbly: ['"Nunito"', 'sans-serif'],
        display: ['"Fredoka One"', 'cursive'],
      },
      colors: {
        sky: { kids: '#5BC8F5' },
        sun: '#FFD23F',
        grass: '#4CAF50',
        coral: '#FF6B6B',
        violet: '#A855F7',
        tangerine: '#FF9A3C',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 2.5s infinite',
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
