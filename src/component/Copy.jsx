import { CopyFilled, CopyOutlined, CopyTwoTone } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const Copy = ({text}) => {
  const [color, setColor] = useState(false);

const onclick=()=>{
    navigator.clipboard.writeText(text)
    setColor(true)
  }

  useEffect(() => {
    if(color!==false)
    setTimeout(() => {
      setColor(false)
    }, 1000);
      
  }, [color]);

  return (
    <CopyFilled   className={`${color?"text-app_ld_accent":null}`} onClick={onclick} />  
  )
}

export default Copy
