/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        caudex:["Caudex",  "sans-serif"],
        play:["Playfair Display",  "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        sofia: ['Sofia Pro Medium', 'sans-serif'],
        sofiaRegular: ['Sofia Pro Regular', 'sans-serif'],

      },
      colors:{
        textcolor:"#111111",
        bordercolor:"#ededed",
        footerc:"#f8f8f8",
        text:"#a8a8a8",
        intext:"#495057",
        coffee:"#b8784e",
        footerborder:"#dddddd",
        old:"#979797",
        border:"#eaeaea",
        myred:"#ed1f1f",
        title:"#aaa",
        newstext:"#212529",
        intro:"#e5e5e5"
      },
       screens: {
        'xs': '320px',
        'large': '991px', 
        'medium': '600px', 
        'small':'480px',
        'middle':'575px',
 
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
