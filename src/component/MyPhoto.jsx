import React from "react";
import Theme from "./Theme";
import porfile from "../assets/porfile.webp";

const MyPhoto = () => {
  return (
    <div className="">
      <div className="right-2 top-2 z-50 absolute">
        <Theme />
      </div>
      <span className=" w-fit h-fit flex justify-center p-2">
        <img
          alt="porfile"
          decoding="async"
          className="  w-[80%] select-none  inset-0  object-cover  rounded-full  bg-gradient-to-t 
          from-app_lc_background to-app_lc_secondary
          dark:from-app_ld_background dark:to-app_ld_secondary
          "
          src={porfile}
        />
      </span>
    </div>
  );
};

export default MyPhoto;
