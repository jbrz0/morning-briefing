module.exports = {
  content: [
    './components/**/*.{html,js,jsx,tsx}',
    './pages/**/*.{html,js,jsx,tsx}'
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  theme: {
    screens: {
      'sm': '640px',
      // 'md': '768px',
      'md': '850px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      // 'sans': ['Arial', 'sans-serif'],
      // 'serif': ['serif'],
      // 'mono': ['OS Mono', 'monospace'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
    },
    extend: {
      colors: {
        'purple-100': '#353454',
        'purple-200': '#30324A',
        'purple-300': '#2B2C49',
        'purple-400': '#252742',
        'purple-500': '#1C1D31',
        'purple-600': '#11111D',
        'gray-100': '#BEBEC6',
        'gray-200': '#353454',
        'green': '#7DFFB4',
        'teal': '#19D0C2',
        'blue': '#4244FF',
        'pink': '#F55498',
        'white ': '#FFFFFF',
      },
      opacity: {
        '85': '0.85',
      }
    }
  }
}
