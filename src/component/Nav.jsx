import React, { useContext } from 'react'
import {Link} from 'react-router'
import { dataNavigation,  } from '../Data';
import contextLanguage from '../context/Language';

const Button=({title,icon,to,last})=>{
  return(<Link to={to} className={`flex flex-col w-full  border border-x-0 border-t-0 items-center ${last&&"border-none"}  p-2`}>
    <span>{icon}</span>
    <span className='align-middle text-center'>{title}</span>
  </Link>)
}


const Nav = () => {
  const {getLanguage}= useContext(contextLanguage)

  return (
    <>
      {
        dataNavigation[getLanguage].map((e,i)=><Button {...e} key={i} last={navigation.length-1===i} />)
      }
      </>
  )
}

export default Nav
