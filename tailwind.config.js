/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        paragraph: '14px',
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

