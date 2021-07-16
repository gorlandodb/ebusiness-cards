module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      gridTemplateRows: {
       '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRowEnd: {
        '11': '11',
        '12': '12',
        '13': '13',
      },
      backgroundImage: theme => ({
        'fondo': "url('/jpg/image.jpg')",
      }),
      fontSize: {
        'xxs': '.5rem',
      }, 
      borderWidth: {
        '1': '1px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
