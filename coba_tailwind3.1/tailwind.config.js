/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        hijau: '#bada55',
        // tema untuk mengubah transparansi email
        tema: 'rgb(var(--warna-tema) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
