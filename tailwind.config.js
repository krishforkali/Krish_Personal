/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-custom': '#ff9eb3',
        'lavender-custom': '#c7b3f0',
        'blue-custom': '#a8c7e8',
        'charcoal-custom': '#1a1a2e',
        'dark-custom': '#0f0f1e',
      },
      backdropBlur: {
        '30': '30px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s infinite linear',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
            filter: 'blur(20px)',
          },
          '50%': {
            opacity: '1',
            filter: 'blur(30px)',
          },
        },
      },
    },
  },
  plugins: [],
}
