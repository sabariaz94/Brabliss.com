/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx}', // if you use Tailwind inside Sanity Studio too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
