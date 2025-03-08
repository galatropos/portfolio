import React from 'react'
import logotipo from '../assets/logotipo.webp'
const Logotipo = ({className}) => {
  return (
    <div className={className+" w-20"}>
        <img src={logotipo} className='full' />
    </div>
  )
}

export default Logotipo
