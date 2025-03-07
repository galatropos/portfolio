import React, { useContext } from "react";
import { Facebook, Gmail, LinkedIn, WhatsApp } from "./Icons";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import contextLanguage from "../context/Language";
import { dataContact } from "../Data";

const social = [
  {
    text: "/gaal.el",
    href: "https://www.facebook.com/gaal.el",
    icon: <Facebook />,
  },

  {
    text: "/gaal",
    href: "https://www.linkedin.com/in/gaal/",
    icon: <LinkedIn />,
  },
];
const myContact = [
  {
    text: "+521 919 128 1521",
    href: "https://wa.me/5219191281521?text=¡Hola! Estoy en búsqueda de nuevas oportunidades. Si crees que encajo en tu equipo, hablemos.",
    icon: <WhatsApp />,
  },

  {
    text: "giovany.alejandro80@gmail.com",
    href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=giovany.alejandro80@gmail.com",
    icon: <Gmail />,
  },
];

const Card = ({ text, href, icon }) => (
  <div className="  flex flex-col  gap-2 items-center">
    <a
      className=" overflow-auto rounded-full flex w-16 h-16 p-2 text-center  bg-app_lc_primary dark:bg-app_ld_primary  hover:bg-app_ld_accent dark:hover:bg-app_ld_accent"
      target="_blank"
      href={href}
    >
      {icon}
    </a>
    <label>{text}</label>
  </div>
);

const Contact = () => {
  const {getLanguage}= useContext(contextLanguage)


  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <h2 className="text-app_lc_accent dark:text-app_ld_accent text-2xl">
        {dataContact[getLanguage][0]}
      </h2>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl text-app_lc_primary dark:text-app_ld_primary">
          {dataContact[getLanguage][1]}
        </h3>
        <div className="flex flex-row gap-2">
         {social.map((e) => <Card {...e} key={e.text} />)}
        </div>
      </div>

      <div className="flex gap-4 justify-center flex-col items-center">
        <h3 className="text-xl text-app_lc_primary dark:text-app_ld_primary text-center">
          {dataContact[getLanguage][2]}
        </h3>
        <div className="flex flex-row gap-2">
          {myContact.map((e) =><Card {...e} key={e.text} />)}
        </div>
      </div>
    </div>
  );
};

export default Contact;
