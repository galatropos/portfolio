import { ArrowUpOutlined, VerticalLeftOutlined } from '@ant-design/icons'
import React from 'react'
import { dataAbout, dataContact, dataMyContact, dataSocial } from '../Data';

const Footer = () => {
const onClick=()=>{
    window.scrollTo(0, 0);
}
const newContact=new Array(...dataMyContact,...dataSocial)

    return (
    <footer className="h-20 w-full
    bg-app_ld_secondary
    mt-10
    flex flex-row
    justify-between
    gap-8
    items-center
    px-10
    shadow_app
    ">
    <div>
    Copyright © 2024. Giovany Alejandro Alfaro López
    </div>

    <div>
        <div className='flex flex-row gap-3 h-16 '>



        {newContact.map(({href,icon})=><a key={href} href={href} className='flex cursor-pointer rounded-full p-4 shadow_app'>{icon}</a>)}
        <span className='rounded-full text-[2em] h-16 w-16 flex justify-center shadow_app cursor-pointer ' onClick={onClick}>
         <ArrowUpOutlined className=' ' size={1090} width={"244em"} height={"233em"} />
            </span>
      
        </div>
    </div>
    </footer>
  )
}

export default Footer