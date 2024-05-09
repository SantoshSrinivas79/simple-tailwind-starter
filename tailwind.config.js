/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' } // Move only a third of the total content width
        },
      },
      animation: {
        scroll: 'scroll 5s linear infinite', // Duration can be adjusted for speed
      },
      spacing: {
        'marquee': '2rem', // Custom gap size for the marquee, if you need to apply spacing between items
      }
    },
  }
}