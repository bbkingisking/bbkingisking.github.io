/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#1a1a1a',
        tertiary: '#252525',
        accent: '#ff8c42',
        'accent-2': '#ff6b1a',
        'accent-3': '#ff9500',
      },
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px currentColor'
          },
          '100%': {
            boxShadow: '0 0 20px currentColor, 0 0 30px currentColor'
          }
        }
      }
    },
  },
  plugins: [],
}