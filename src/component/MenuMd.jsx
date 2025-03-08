import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useContext, useRef, useState } from "react";
import Logotipo from "./Logotipo";
import Header from "./Header";
import Nav from "./Nav";
import Theme from "./Theme";
import contextToggle from "../context/Toggle";
import ToggleLanguage from "./ToggleLanguage";

const MenuMd = () => {
  const { onToggle, ref } = useContext(contextToggle);

  return (
    <>
      <div className=" md:hidden flex px-2 justify-around items-center h-full w-full text-app_lc_text border ">
        <span className="flex flex-nowrap">
          <Logotipo /> Giovany Alejandro Alfaro Lopez
        </span>

        <span className="  flex flex-col">
          <span className="text-right">
            <MenuOutlined onClick={() => onToggle(true)} className="" />
            <ToggleLanguage />
            <Theme />
          </span>
          <span></span>
        </span>
      </div>

      <div
        ref={ref}
        className={`background_bg fixed w-screen h-screen top-0 left-0 hidden `}
      >
        <div className="h-full w-full flex flex-col items-center gap-4  ">
          <div className=" flex px-2 justify-around items-center w-full text-app_lc_text border">
            <span className="flex flex-nowrap">
              <Logotipo /> Giovany Alejandro Alfaro Lopez
            </span>
            <span className="  flex flex-col">
              <span className="text-right">
                <PlusOutlined rotate={45} onClick={onToggle} />
            <ToggleLanguage />
            <Theme />
              </span>
              <span></span>
            </span>
          </div>

          <div className="secondary_bg  rounded-md  w-[80%] h-[90%] overflow-hidden">
            <div className="mb-5 mt-2"></div>
            <span className="flex  flex-col gap-6 ">
              <Nav md />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMd;
