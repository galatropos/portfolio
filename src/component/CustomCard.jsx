import React from 'react'

const CustomCard = ({children,className}) => {
  return (
    <div
    className={` w-fit p-4
        rounded-lg  
        shadow_app
        ${className}
        `}
    >
        {children}
    </div>
  )
}

export default CustomCard
