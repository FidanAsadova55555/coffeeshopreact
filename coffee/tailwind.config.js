/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        caudex:["Caudex",  "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        sofia: ['Sofia Pro', 'sans-serif'],

      },
      colors:{
        textcolor:"#111111",
        bordercolor:"#e5e5e5",
        desccolor:"#555555",
        footercolor:"#d3d3d3",
        footerbg:"#383e56"
      },
       screens: {
        'xs': '320px', 
      },
      boxShadow: {
        custom: "0 0 3px rgba(0, 0, 0, .15)",
      },
      fontSize: {
        h1: "clamp(2.8rem, 4vw, 36px)",
      },
    
    },
  },
  plugins: [],
};
