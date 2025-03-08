/** @type {import('tailwindcss').Config} */
/*



e9e6e4  ivory
ebcdc4  blush
d5b09c  coffe
7e9693  sage
204045  forest
*/
const color=[
  "#e9e6e4",//  0-ivory
  "#ebcdc4",//  1-blush
  "#d5b09c",//  2-coffe
  "#7e9693",//  3-sage
  "#204045",//  4-forest
  "#ffffff",//  5-white
  "#0c0e14",//  6-dark suave
  "#181b28",//  7-dark1 hard
  
]

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"selector",
  theme: {
    extend: {
      colors:{

        app_lc_primary:color[1],      
        app_lc_secondary:color[5],     
        app_lc_accent:color[2],     
        app_lc_background:color[0],     
        app_lc_text:color[4],    
       
 
        app_ld_primary:color[1],      
        app_ld_secondary:color[7],     
        app_ld_accent:color[2],     
        app_ld_background:color[6],     
        app_ld_text:color[0],    
           
      }


    },
  },
  plugins: [],
}