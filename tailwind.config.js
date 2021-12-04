module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      colors: {
        dark:{
          100:'#222222',
          200:'#181818',
        },
        
        primary: {
          100: '#e5eaf7',
          200: '#7492ec',
        },
      },

      fontFamily: {
        body: ['Poppins','sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
