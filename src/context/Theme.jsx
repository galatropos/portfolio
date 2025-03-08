import {createContext, useState} from 'react';

const contextTheme = createContext();
export const ProviderTheme=({children})=>{
const [getTheme, setTheme] = useState(true);
    return(
        <contextTheme.Provider value={{getTheme,setTheme}}>
            {children}
        </contextTheme.Provider>
    )
}

export default contextTheme;