module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      "ubuntu": "Ubuntu"
    },
    extend: {},
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      grayscale: ['group-hover']
    },
  },
  plugins: [],
}
