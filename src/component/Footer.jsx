import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import { dataFooter, dataMyContact, dataSocial } from "../Data";

const Footer = () => {

  return (
    <footer
      className="h-20 w-full
    secondary_bg
    mt-10
    flex flex-row
    justify-between
    gap-8
    max-md:gap-4
    items-center
    px-10
    max-md:px-5
    shadow_app
    text-text
    "
    >
      <div>Copyright © 2025. Giovany Alejandro Alfaro López</div>

      <div className="flex flex-row gap-3 h-16  max-md:gap-1  flex-wrap  ">
        {dataFooter.map(({ href, icon }) => (
          <a
            key={href}
            href={href}
            className="flex cursor-pointer rounded-full p-4 max-md:p-1  max-md:h-5 md:p-4 md:h-16 shadow_app 
    hover:bg-app_ld_accent dark:hover:bg-app_ld_accent
            
            "
          >
            {icon}
          </a>
        ))}

      </div>
    </footer>
  );
};

export default Footer;
