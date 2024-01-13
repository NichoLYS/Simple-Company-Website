/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'line-grow': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'line-grow': 'line-grow 0.3s ease-out', // Nama animasi, durasi, dan fungsi timing
      },
    },
  },
  plugins: [],
}

