import React, { useContext } from "react";
import contextLanguage from "../context/Language";
import { dataJobs, dataJobsButton } from "../Data";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import CustomCard from "./CustomCard";

const Tag = ({ name, icon }) => (
  <span
    className="flex flex-row flex-nowrap w-fit
   bg-app_lc_background 
   dark:bg-app_ld_accent 
   text_text
   border-app_lc_accent
   dark:border-app_ld_accent
   select-none
   text-xs font-medium me-2 px-2.5 py-0.5 rounded-md 
   "
  >
    <label className=" flex w-4 h-4 pr-2">{icon}</label>
    {name}
  </span>
);

const Card = ({ href, image, tag, ...language }) => {
  const { getLanguage } = useContext(contextLanguage);
  const { name, description } = language[getLanguage];
  return (
    <div
      className="
    "
    >
      <div
        className="w-full
    flex 
    max-md:flex-col 
    md:flex-row 
    md:max-w-xl  
    items-center  
        "
      >
        <div className="flex-col flex flex-wrap items-center w-fit gap-2 ">
          <PhotoProvider>
            <div className="flex flex-wrap flex-row gap-2 justify-evenly ">
              <PhotoView src={image}>
                <img
                  src={image}
                  alt="00"
                  key={"00"}
                  className="cursor-pointer"
                  loading="lazy"
                />
              </PhotoView>
            </div>
          </PhotoProvider>

          <a
            target="_blank"
            href={href}
            className={`
              cursor-pointer
              border
        hover:border-app_lc_accent 
        dark:hover:border-app_ld_accent 
        hover:text-app_lc_accent
        dark:hover:text-app_ld_accent
        text-app_lc_text
        dark:text-app_ld_text
        rounded-lg w-fit p-2 text-center 
        
        `}
          >
            {dataJobsButton[getLanguage]}
          </a>
        </div>
        <div className="flex flex-col items-center justify-center  p-4 leading-normal gap-2   ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight accent_text">
            {name}
          </h5>
          <p className="mb-3 font-normal text_text overflow-auto ">
            {description}
          </p>
          <CustomCard className="flex gap-2 flex-row flex-wrap  justify-evenly w-fit">
            {tag.map((e, i) => (
              <Tag {...e} key={i} />
            ))}
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-evenly  ">
      {dataJobs.map((e, i) => (
        <Card {...e} key={i} />
      ))}
    </div>
  );
};

export default Jobs;
