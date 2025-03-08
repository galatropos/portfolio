import {createContext, useRef, useState} from 'react';

const contextToggle= createContext();
export const ProviderToggle=({children})=>{
const [getToggle, setToggle] = useState(false);
const ref=useRef()

const onToggle = (md) => {
    if(md){
        ref.current.classList.toggle("hidden");
        ref.current.classList.contains("hidden");
        setToggle(!getToggle);
    }
    else{

        ref.current.classList.add("hidden")
        setToggle(false)
    }
  };


    return(
        <contextToggle.Provider value={{getToggle,setToggle,onToggle,ref}}>
            {children}
        </contextToggle.Provider>
    )
}

export default contextToggle;