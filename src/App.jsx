import React, { useContext } from "react";
import MenuMd from "./component/MenuMd";
import MenuLg from "./component/MenuLg";
import About from "./component/About";
import Experience from "./component/Experience";
import Jobs from "./component/Jobs";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import contextLanguage from "./context/Language";
import { dataTitle } from "./Data";

const Title=({id,element,...language})=>
{
  const {getLanguage}= useContext(contextLanguage)
return(

  <>
        <section id={id} className="pt-32">        
          <h2 className="text-app_lc_accent text-center dark:text-app_ld_accent text-2xl pb-4">
          {language[getLanguage]}
        </h2>
          {element}
        </section>
        
       </>
)
}

const App = () => {


  return (
    <div className="
    flex 
    flex-col
    min-w-screen 
    min-h-screen
      bg-app_lc_background
      dark:bg-app_ld_background
     text_text "
     >
      <div  className="overflow-auto z-20 min-h-20 h-20  w-full fixed top-0  bg-app_lc_primary/90 dark:bg-app_ld_primary/90 shadow_app ">
          <div className="  h-full  w-full  ">
            <MenuMd />
            <MenuLg />
          </div>
      </div>
      <div className=" w-full flex  justify-center background_bg  ">
        <span className="w-[70%]   flex flex-col items-center justify-center">
          {dataTitle.map(e=><Title {...e} key={e.id} />)}
        </span>

      </div>
        <Footer/>
    </div>
  );
};

export default App;
