import React, { useContext } from 'react'
import contextLanguage from '../context/Language'
import { Link } from 'react-router';
import { dataLaguage } from '../Data';

const Language = () => {
   const {getLanguage,setLanguage}= useContext(contextLanguage)
  return (
    <>
    <Link onClick={()=>setLanguage("es")} 
        className={`
        dark:hover:bg-app_ld_primary 
        hover:bg-app_lc_primary 
        hover:text-app_lc_secondary
        dark:hover:text-app_ld_secondary
        shadow_app 
        rounded-l-lg w-[70px] p-1 text-center ${getLanguage==="es"?"bg-app_ld_accent":null} `}>
            {dataLaguage[getLanguage][0]}
    </Link>
    <Link onClick={()=>setLanguage("en")} 
        className={`
        dark:hover:bg-app_ld_primary 
        hover:bg-app_lc_primary 
        hover:text-app_lc_secondary
        dark:hover:text-app_ld_secondary
        shadow_app 
        rounded-r-lg w-[70px] p-1 text-center ${getLanguage==="en"?"bg-app_ld_accent":null}`}>
            {dataLaguage[getLanguage][1]}

    </Link>
    </>
)
}

export default Language
