import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import {  dataMyContact, dataSocial } from "../Data";

const Footer = () => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  const newContact = new Array(...dataMyContact, ...dataSocial);

  return (
    <footer
      className="h-20 w-full
    bg-app_ld_primary
    mt-10
    flex flex-row
    justify-between
    gap-8
    max-md:gap-4
    items-center
    px-10
    max-md:px-5
    shadow_app
    text-app_lc_text
    "
    >
      <div>Copyright © 2025. Giovany Alejandro Alfaro López</div>

        <div className="flex flex-row gap-3 h-16  max-md:gap-1  flex-wrap  ">
          {newContact.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              className="flex cursor-pointer rounded-full p-4 max-md:p-1  max-md:h-5 md:p-4 md:h-16
         shadow_app
        
         "
         
            >
              {icon}
            </a>
          ))}
          <span
            className="rounded-full md:text-[3em] max-md:text-[1em]  md:h-16 md:w-16 max-md:h-5 max-md-w-5 flex justify-center shadow_app cursor-pointer  text-text2 "
            onClick={onClick}
          >
            <ArrowUpOutlined />
          </span>
        </div>
    </footer>
  );
};

export default Footer;
