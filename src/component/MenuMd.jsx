import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import Logotipo from "./Logotipo";
import Nav from "./Nav";
import Theme from "./Theme";
import contextToggle from "../context/Toggle";
import ToggleLanguage from "./ToggleLanguage";

const MenuMd = () => {
  const { onToggle, ref } = useContext(contextToggle);

  return (
    <>
      <div className=" md:hidden flex px-2 justify-around items-center h-full w-full text-app_lc_text  ">
        <span className="flex flex-nowrap">
          <Logotipo />
        </span>
        <label>Giovany Alejandro Alfaro Lopez</label>

        <span className="  flex flex-col">
          <MenuOutlined onClick={() => onToggle(true)} className="text-2xl" />
        </span>
      </div>

      <div
        ref={ref}
        className={`background_bg fixed w-screen h-screen top-0 left-0 hidden `}
      >
        <div className="h-full w-full flex flex-col items-center gap-4 ">
          <div className=" flex px-2 justify-around items-center w-full ">
            <span className="flex flex-nowrap ">
              <Logotipo />
            </span>
            <span className=" text-text">Giovany Alejandro Alfaro Lopez</span>
            <span className="  flex flex-col">
              <span className="text-right">
                <PlusOutlined
                  className="text-2xl"
                  rotate={45}
                  onClick={onToggle}
                />
              </span>
            </span>
          </div>

          <div className="secondary_bg   w-[80%] h-[85%]  flex flex-col justify-between rounded-md ">
              <Nav md />
              <span>
              </span>

              <span className="p-2 w-ful flex flex-row flex-wrap justify-end  gap-2 ">
              <ToggleLanguage />
              <Theme />
            </span>
  

          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMd;
