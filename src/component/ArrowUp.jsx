import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";

const ArrowUp = () => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  return (

    <span className="sticky  top-[80%]   w-[90vw]  ">
      <span
        className=" hover:bg-app_ld_accent dark:hover:bg-app_ld_accent absolute right-0  rounded-full md:text-[3em] max-md:text-[2em]  md:h-16 md:w-16 max-md:h-10 max-md-w-10 flex justify-center shadow_app cursor-pointer  text-text2 "
        onClick={onClick}
        >
        <ArrowUpOutlined />
      </span>
    </span>
  );
};

export default ArrowUp;
