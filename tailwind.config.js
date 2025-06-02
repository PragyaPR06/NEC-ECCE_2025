/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        blink: {
          '0%, 66%': { opacity: '1' },
          '66.0001%, 100%': { opacity: '0' }
        }
      },
      animation: {
        blink: 'blink 2s infinite'
      },
            fontFamily: {
              'anek': ['"Anek Tamil"', 'sans-serif'],
            },
        
      colors: {
        'blue-430': '#92C1FA', // Adjust the hex code to match your desired shade
      },
      backgroundOpacity: ['active']

    },
  },
  plugins: [],
}

