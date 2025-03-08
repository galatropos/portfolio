import React, { useContext } from "react";
import contextLanguage from "../context/Language";
import { dataAbout } from "../Data";
import Header from "./Header";
import Nav from "./Nav";
import MyPhoto from "./MyPhoto";
import Language from "./Language";
import ToggleLanguage from "./ToggleLanguage";

const About = () => {
  const { getLanguage } = useContext(contextLanguage);
  return (
    <>
      <div
        className=" bg-app_lc_background 
      dark:bg-app_ld_background 
      text-app_lc_text 
      dark:text-app_ld_text flex 
      md:flex-row flex-col 
      w-full h-fit md:h-full
      justify-center "
      >
        <header
          className="shadown w-[360px] h-[82vh]  mt-[9vh]  rounded-sm z-10 
       shadow-[-5px_-5px_rgba(126,_150,_147,_0.4),_-10px_-10px_rgba(126,_150,_147,_0.3),_-15px_-15px_rgba(126,_150,_147,_0.2)] 
       flex flex-col justify-between
       bg-app_lc_secondary dark:bg-app_ld_secondary
       "
        >
          <div className=" group relative h-[17.5rem] transform overflow-hidden rounded-4xl z-50  ">
            <MyPhoto />
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div>Giovany Alejandro Alfaro López</div>
            <div className="flex">
              <Language />
            </div>
          </div>
          <div className=" flex flex-row z-50 ">
            <Header />
          </div>
        </header>

        <section
          className=" 
        md:overflow-auto md:w-[640px] md:h-[80vh]  md:mt-[10vh] max-md:mt-2 
         rounded-sm shadow rounded-l-none 
         bg-app_lc_secondary  dark:bg-app_ld_secondary
         "
        >
          <div
            className=" h-full  mx-4 p-4 shadow-[-15px_-0px_rgba(126,_150,_147,_0.4)] "
          >
            <div
              className="m-4
  first-letter:text-app_lc_accent 
  text-justify
  dark:first-letter:text-app_ld_accent
  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold 
   first-letter:me-3 first-letter:float-start overflow-hidden"
            >
              {dataAbout[getLanguage]}
        
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
