/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      padding: {
        6.5: '6.5px',
      },
    },
    colors: {
      seagreen: '#0c3934',
      white: 'white',
      black: 'black',
      feece8: '#feece8',
      lightGreen: '#17443b',
      c6d1cf: '#c6d1cf',
      lightLemon: '#549c5a',
      blue: '#1f3e9f',
      gray: 'gray',
      lighterGreen: '#7ec084',
      darkslategray: 'darkslategray',
    },
  },
  plugins: [],
}
