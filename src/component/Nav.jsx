import React, { useContext } from 'react'
import { dataNavigation,  } from '../Data';
import contextLanguage from '../context/Language';
import contextToggle from '../context/Toggle';

const Button=({title,icon,to,last,md})=>{
  const { onToggle}= useContext(contextToggle)

  const onClick=(to)=>{
    onToggle(md)

    const link = document.createElement("a");
    link.href = `#${to}`;
    document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);

  }

  return(<span onClick={()=>onClick(to)} className={`flex flex-row max-md:flex-col flex-nowrap 
    md:w-fit
    max-md:w-full
    border 
    items-center justify-center 
     h-11 
    border-x-0 border-t-0 

`}>
    <span>{icon}</span>
    <span className='align-middle text-center'>{title}</span>
  </span>)
}


const Nav = ({md=false}) => {
  const {getLanguage}= useContext(contextLanguage)

  return (
        dataNavigation[getLanguage].map((e,i)=><Button md={md} {...e} key={i} last={navigation.length-1===i} />)
  )
}

export default Nav
