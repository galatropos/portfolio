/** @type {import('tailwindcss').Config} */
/*



e9e6e4  ivory
ebcdc4  blush
d5b09c  coffe
7e9693  sage
204045  forest
*/
const color=[
  "#2ECC71",//  0-Esmeralda
  "#cad8de",//  1-light suave
  "#ccded5",//  2-light hard
  "#121212",//  3-dark hard
  "#2a523b",//  4-dark1 suave
  
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

        app_lc_primary:color[2],      
        app_lc_secondary:color[2],     
        app_lc_accent:color[0],     
        app_lc_background:color[1],     
        app_lc_text:color[3],    
       
 
        app_ld_primary:color[2],      
        app_ld_secondary:color[4],     
        app_ld_accent:color[0],     
        app_ld_background:color[3],     
        app_ld_text:color[2],    
           
      }


    },
  },
  plugins: [],
}