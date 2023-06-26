/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeGreen: {
          1: '#002A39',
          2: '#00A5AE',
          3: '#BDDDB8',
        },
        themeRed: {
          1: '#F75077',
        },
        themeYellow: {
          1: '#FEF9ED',
          2: '#E2E2E2',
        },
        themeGrey: {
          1: '#42464C',
          2: '#212529',
        },
        themeWhite: {
          1: '#FFFFFF',
          2: '#F5F5F5',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { right: '-770px' },
          '100%': { right: '0' },
        },
        slideOut: {
          '0%': { right: '0' },
          '100%': { right: '-770px' },
        },
      },
      animation: {
        'slide-in': 'slideIn 300ms ease-in-out',
        'slide-out': 'slideOut 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
