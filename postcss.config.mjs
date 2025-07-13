// postcss.config.mjs (correct for Tailwind v4)
// import tailwindcss from '@tailwindcss/postcss'
// import autoprefixer from 'autoprefixer'

// export default {
//   plugins: [tailwindcss, autoprefixer],
// }


// const tailwindcss = require('@tailwindcss/postcss')
// const autoprefixer = require('autoprefixer')

// module.exports = {
//   plugins: [tailwindcss, autoprefixer],
// }
// postcss.config.cjs
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
