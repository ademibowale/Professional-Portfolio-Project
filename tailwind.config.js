/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
  extend: {
  colors:{
  blue:"#2CBCEE9",
  red:"#DC4492",
  yellow:"#FDCC49",
  grey:"#ededed",
  "deep-blue":"#010026",
  "dark-grey":"#757575",
  "opaque-black":"rbg(0,0,0,0,35)"
   },
  backgroundImage:(theme)=>({
  "gradient-rainbow":
    "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
  "gradient-rainblue":
    "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
   }),
fontFamily:{
  playfair:["Playfair Display","Serif"],
  opensans:["Open Sans","sans-serif"]
},
content:{
  brush:"url('./assets/brush.png')",
  persion1:"url('./assets/person-1.jpg')",
  persion2:"url('./assets/person-2.jpg')",
  persion3:"url('./assets/person-3.jpg')",
}
    },

screens:{
  xs:"480px",
  sm:"768px",
  md:"1060px",
}
  },
  plugins: [],
}
