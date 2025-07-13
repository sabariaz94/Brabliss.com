// studio/postcss.config.js
// export const plugins = {
//     tailwindcss: {},
//     autoprefixer: {},
// };


const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
