import {createContext, useState} from 'react';

const contextLanguage = createContext();
export const ProviderLanguage=({children})=>{
const [getLanguage, setLanguage] = useState("es");
    return(
        <contextLanguage.Provider value={{getLanguage,setLanguage}}>
            {children}
        </contextLanguage.Provider>
    )
}

export default contextLanguage;