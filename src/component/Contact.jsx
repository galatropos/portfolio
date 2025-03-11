import React, { useContext } from "react";
import contextLanguage from "../context/Language";
import { dataContact, dataMyContact, dataSocial } from "../Data";
import Copy from "./Copy";
import ArrowUp from "./ArrowUp";

const Card = ({ text, href, icon }) => (
  <div className="  flex flex-col  gap-2 items-center w-fit ">
    <a
      className=" overflow-auto rounded-full  shadow_app flex w-16 h-16 p-3 text-center  
      secondary_bg  hover:bg-app_ld_accent dark:hover:bg-app_ld_accent"
      target="_blank"
      href={href}
    >
      {icon}
    </a>
    <div className="flex-row w-max flex-nowrap  justify-between">
      {text} <Copy text={text} />
    </div>
  </div>
);

const Contact = () => {
  const { getLanguage } = useContext(contextLanguage);

  return (
    <div className="flex flex-col justify-center items-center gap-20 ">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl text_text">{dataContact[getLanguage][1]}</h3>
        <div className="flex flex-row gap-4 flex-wrap justify-evenly">
          {dataSocial.map((e) => (
            <Card {...e} key={e.text} />
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-center flex-col items-center">
        <h3 className="text-xl text_text text-center">
          {dataContact[getLanguage][2]}
        </h3>
        <div className="flex flex-row gap-4 flex-wrap justify-evenly ">
          {dataMyContact.map((e) => (
            <Card {...e} key={e.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
