import { CloudDownloadOutlined, WhatsAppOutlined } from '@ant-design/icons'
import React, { useContext } from 'react'
import { dataHeader } from '../Data'
import contextLanguage from '../context/Language'
import cv from '../assets/cv.pdf';

const Header = () => {
   const {getLanguage}= useContext(contextLanguage)

   const onDownload=()=>{
    const link = document.createElement("a");
    link.href = cv;
    link.download = "cv.pdf"; // specify the filename
    document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);

   }
  return (
    <div className='flex flex-col'>
          <a className=' border border-x-0 border-t-0 p-2 text-center w-full' aria-label="Chat on WhatsApp" target='_blank' 
          href={`https://wa.me/5219191281521?text=¡Hola! Estoy en búsqueda de nuevas oportunidades. Si crees que encajo en tu equipo, hablemos.`}
          >
          {dataHeader[getLanguage][0]} <WhatsAppOutlined />
          </a >

        <div onClick={onDownload} className='border border-x-0 border-t-0 w-full p-2 text-center'>{dataHeader[getLanguage][1]} <CloudDownloadOutlined /></div>
  </div>
  )
}

export default Header
