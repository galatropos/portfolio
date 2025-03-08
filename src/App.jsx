import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import MenuMd from "./component/MenuMd";
import MenuLg from "./component/MenuLg";
import About from "./component/About";
import Experience from "./component/Experience";
import Jobs from "./component/Jobs";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen primary_bg text_text scroll-smooth">
      <div className=" min-h-20 h-20  w-full fixed top-0  bg-app_lc_primary/90 dark:bg-app_ld_primary/90  shadow-md">
          <div className="  h-full  w-full  ">
            <MenuMd />
            <MenuLg />
          </div>
      </div>
      <div className=" h-fit  w-full  bg-app_lc_background dark:bg-app_ld_background flex flex-col ">

        <section id="experience" className="pt-32"><Experience /></section>
        <section id="jobs" className="pt-32"><Jobs /></section>
        <section id="contact" className="pt-32"><Contact /></section>
        <section id="about" className="pt-32"><About /></section>

      </div>
    </div>
  );
};

export default App;
