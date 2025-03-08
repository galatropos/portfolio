import React from "react";
import Logotipo from "./Logotipo";
import Theme from "./Theme";
import Nav from "./Nav";
const MenuLg = () => {
  return (
    <div className="flex flex-row px-10 items-center  justify-between h-full gap-4  max-md:hidden text-app_lc_text">
      <label className="w-fit  flex  items-center">
        <Logotipo /> Giovany Alejandro Alfaro López
      </label>
        <span
          className="flex  flex-row  gap-6 mr-5
            even:border-app_lc_text odd:border-app_lc_text 
        [&>*:nth-child(odd)]:border-app_lc_text [&>*:nth-child(even)]:border-app_lc_text
            
            "
        >
          <Nav />
        <Theme />
      </span>
    </div>
  );
};

export default MenuLg;
