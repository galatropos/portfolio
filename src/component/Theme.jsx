import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const Theme = () => {
    const [theme, setTheme] = useState(true);
    useEffect(() => {
    setTheme( window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, []);

    const onclick=()=>{
        const element=document.querySelector("html")
        element.classList.toggle("dark")
        setTheme(element.classList.contains("dark"))
    }

    return (
    <div className=''>
        {theme?<SunOutlined   onClick={onclick} />:<MoonOutlined onClick={onclick} />}
        
    </div>
  )
}

export default Theme
