import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import React, { useContext, useEffect, useState } from 'react'
import contextTheme from '../context/Theme';

const Theme = ({className}) => {
   const {getTheme,setTheme}= useContext(contextTheme)

    useEffect(() => {
    setTheme( window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, []);

    const onclick=()=>{
        setTheme(!getTheme)
    }
useEffect(() => {
    
    const element=document.querySelector("html")
    if(getTheme)element.classList.add("dark")
    else element.classList.remove("dark")
        
}, [getTheme]);
        
            

    return (
    <div className={className}>
        {getTheme?<SunOutlined   onClick={onclick} />:<MoonOutlined onClick={onclick} />}
        
    </div>
  )
}

export default Theme
