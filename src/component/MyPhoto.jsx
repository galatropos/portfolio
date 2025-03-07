import React from 'react'
import Theme from './Theme'
import porfile from "../assets/porfile.webp"

const MyPhoto = () => {
  return (
    <>
                        <div className='right-2 top-2 z-50 absolute'><Theme/></div>
                    <img alt="porfile"  decoding="async"  className="select-none absolute inset-0  object-cover z-10 " src={porfile} />

    </>
  )
}

export default MyPhoto
