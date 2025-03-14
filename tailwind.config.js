/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
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

