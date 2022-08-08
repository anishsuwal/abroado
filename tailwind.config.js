/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,pdf}",
    "./components/**/*.{js,ts,jsx,tsx,pdf}",
  ],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
    extend: {
      animation: {
        cursor: 'cursor 2.6s linear infinite alternate',
        type: 'type 5.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 5.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '10%, 15%': { width: '2ch' },
          '15%, 20%': { width: '3ch' },
          '25%, 35%': { width: '4ch' },
          '35%, 40%': { width: '5ch' },
          '40%, 45%': { width: '6ch' },
          '45%, 50%': { width: '7ch' },
          '50%, 55%': { width: '8ch' },
          '55%, 60%': { width: '9ch' },
          '60%, 65%': { width: '10ch' },
          '65%, 70%': { width: '11ch' },
          '70%, 75%': { width: '12ch' },
          '70%, 75%': { width: '13ch' },
          '75%, 80%': { width: '14ch' },
          '80%, 85%': { width: '15ch' },
          '85%, 90%': { width: '16ch' },
          '90%, 95%': { width: '17ch' },
          '95%': { width: '18ch' },
          '97%': { width: '19ch' },
          '100%': { width: '20ch' }

        },
      },
    },
  },
  plugins: [],
}
