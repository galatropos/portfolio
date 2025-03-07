import React, { useContext } from 'react'
import contextLanguage from '../context/Language'
import { dataAbout } from '../Data'



const About = () => {
  const {getLanguage}= useContext(contextLanguage)
  return (

<div className="m-4
  first-letter:text-app_lc_accent 
  text-justify
  dark:first-letter:text-app_ld_accent
  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold 
   first-letter:me-3 first-letter:float-start">
    {dataAbout[getLanguage]}
</div>
  )
}

export default About
