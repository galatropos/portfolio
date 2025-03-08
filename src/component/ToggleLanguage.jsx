import React, { useContext, useEffect, useRef } from 'react'
import contextLanguage from '../context/Language';

const ToggleLanguage = () => {
  const {getLanguage,setLanguage}= useContext(contextLanguage)
    const toggle=useRef()
      
  let lang=""
  let dir=""
  if(getLanguage==="es") 
  {

    lang="Español"
    dir="justify-end pr-2"
  }
  if(getLanguage==="en") 
  {
    lang="English"
    dir="justify-start pl-2"

  }
    
  const onClick=()=>{
    setLanguage(getLanguage==="en"?"es":"en")
  }

  useEffect(() => {
      toggle.current.checked=getLanguage==="en";
      
  }, [getLanguage]);

  return (
   
    <label className="inline-flex items-center cursor-pointer">
    <input ref={toggle} onClick={onClick} type="checkbox" value="" className="sr-only peer" />
    <div className={`
    dark:peer-focus:ring-app_ld_primary 
    peer-focus:ring-app_lc_primary
    peer-checked:bg-app_lc_background
    bg-app_lc_background
    after:bg-app_lc_secondary 
    dark:after:bg-app_ld_secondary 
    after:border-app_lc_primary
    text-app_lc_text
    after:border 
    after:content-[''] 
    relative  h-7 
    peer-focus:outline-none 
    peer-focus:ring-4 
    rounded-full peer 
    peer-checked:after:translate-x-16 
    rtl:peer-checked:after:-translate-x-full 
    after:absolute after:top-0.5 after:start-[4px] 
    after:rounded-full after:h-6 after:w-6 after:transition-all +
    flex flex-row 
    w-24
     ${dir}
    `}
    >
      {lang}
    </div>
  </label>
  )
}

export default ToggleLanguage
