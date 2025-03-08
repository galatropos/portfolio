import React from "react";
import Logotipo from "./Logotipo";
import Theme from "./Theme";
import Nav from "./Nav";
import ToggleLanguage from "./ToggleLanguage";

const MenuLg = () => {

  return (
    <div className="flex flex-row px-10 items-center  justify-between h-full gap-4  max-md:hidden text-app_lc_text">
      <label className="w-fit  flex  items-center">
        <Logotipo /> Giovany Alejandro Alfaro López
      </label>
        <span
          className="flex  flex-row  gap-6 mr-5
            
            "
        >
          <Nav />
          <ToggleLanguage/>
        <Theme className="flex justify-center" />
      </span>
    </div>
  );
};

export default MenuLg;
