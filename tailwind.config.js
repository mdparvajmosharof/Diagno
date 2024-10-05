/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        prothom : '#7BC6CC' ,
        doi : '#BE93C5',
      },
      gradientColorStops:{
        prothom : '#7BC6CC' ,
        doi : '#BE93C5',
      }
    },
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark'],
  },
  
}

