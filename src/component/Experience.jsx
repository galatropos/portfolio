import React, { useContext } from "react";

import {
  React as ReactIcon,
  Expressjs,
  Nodejs,
  JavaScript,
  AntDesign,
  Socketio,
  Vite,
  Php,
  Redux,
  CSS,
  HTML5,
  PostgreSQL,
  MySQL,
  Laravel,
  AmazonWebServices,
  TypeScript,
  MongoDB,
  Bash,
  Bootstrap,
  TailwindCSS,
  MaterialUI,
} from "./Icons";
import contextLanguage from "../context/Language";
import CustomCard from "./CustomCard";

const Icons = [
  {
    name: "ReactSVG",
    icon: <ReactIcon />,
    experience: 3,
  },
  {
    name: "Expressjs",
    icon: <Expressjs />,
    experience: 2,
  },
  {
    name: "Nodejs",
    icon: <Nodejs />,
    experience: 3,
  },
  {
    name: "JavaScript",
    icon: <JavaScript />,
    experience: 3,
  },
  {
    name: "AntDesign",
    icon: <AntDesign />,
    experience: 3,
  },
  {
    name: "Socketio",
    icon: <Socketio />,
    experience: 2,
  },
  {
    name: "Vite",
    icon: <Vite />,
    experience: 3,
  },
  {
    name: "Php",
    icon: <Php />,
    experience: 2,
  },
  {
    name: "Redux",
    icon: <Redux />,
    experience: 2,
  },
  {
    name: "CSS",
    icon: <CSS />,
    experience: 3,
  },
  {
    name: "HTML5",
    icon: <HTML5 />,
    experience: 4,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
    experience: 0,
  },
  {
    name: "MySQL",
    icon: <MySQL />,
    experience: 0,
  },
  {
    name: "Laravel",
    icon: <Laravel />,
    experience: 0,
  },
  {
    name: "AmazonWebServices",
    icon: <AmazonWebServices />,
    experience: 2,
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    experience: 1,
  },
  {
    name: "MongoDB",
    icon: <MongoDB />,
    experience: 3,
  },
  {
    name: "Bash",
    icon: <Bash />,
    experience: 2,
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
    experience: 3,
  },
  {
    name: "TailwindCSS",
    icon: <TailwindCSS />,
    experience: 3,
  },
  {
    name: "MaterialUI",
    icon: <MaterialUI  />,
    experience: 2,
  }
];





const Card = ({ name, icon, experience }) => 
{
  const {getLanguage}= useContext(contextLanguage)

  return(
    <div className="flex flex-row items-center 
    w-fit
    h-fit
    flex-nowrap
    ">
      <label
        className=" rounded-full shadow_app  w-14 h-14 p-2 background_bg"
        >
        {icon}
        </label>
      <div className=" flex flex-col items-center p-4 leading-normal ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
          {name}
        </h5>
      </div>
    </div>

);
}

const Experience = () => {
  return (
    
    <span className="flex flex-wrap gap-4 w-full justify-evenly h-fit ">
      {Icons.map(e => {
        return <Card {...e} key={e.name} />;
      })}
    </span>
  );
};

export default Experience;
