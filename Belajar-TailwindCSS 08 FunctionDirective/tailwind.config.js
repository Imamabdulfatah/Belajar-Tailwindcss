module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
      extend: {
          spacing: {
          13: '3,25rem'
          }, 
          fontFamily: {
              ubuntu: ['Ubuntu'],
          },
          colors: {
              wpu: '#bada55',
              kopi: '#c0ffe',
          },
          animation: {
              'spin-slow' : 'spin 3s linear infinite',
              goyang : 'goyang 1s ease-in-out infinite',
          },
          keyframes : {
              goyang : {
                  '0%, 100%': {transform: 'rotate(-3deg)'}, '50%': {transform: 'rotate(3deg)'},
              },
          },
      },
    },
  plugins: [],
}
