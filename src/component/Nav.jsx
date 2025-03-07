import React, { useContext } from 'react'
import {Link} from 'react-router'
import { dataNavigation,  } from '../Data';
import contextLanguage from '../context/Language';

const Button=({title,icon,to,last})=>{
  return(<Link to={to} className={`flex flex-col border border-x-0 border-t-0 items-center ${last&&"border-none"}  p-2`}>
    <label>{icon}</label>
    <label className='align-middle text-center'>{title}</label>
  </Link>)
}


const Nav = () => {
  const {getLanguage}= useContext(contextLanguage)

  return (
    <div className='flex flex-col'>
      {
        dataNavigation[getLanguage].map((e,i)=><Button {...e} key={i} last={navigation.length-1===i} />)
      }
    </div>
  )
}

export default Nav
