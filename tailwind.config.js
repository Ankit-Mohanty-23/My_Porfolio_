/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        accent: {
          green: '#a3e635', // lime-400
          darkGreen: '#4d7c0f', // lime-700
          surface: '#12121a', // slightly lighter for cards
          line: '#1f2029' // very dim for grid and connecting lines
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #1f2029 1px, transparent 1px), linear-gradient(to bottom, #1f2029 1px, transparent 1px)`
      }
    },
  },
  plugins: [],
}
