import { createContext } from 'react';
import { useState } from 'react';
export const ContextProvider = createContext()

export const GlobalProvider = ({children}) => {
    const [bebas, setBebas] = useState('')

    return(
        <ContextProvider.Provider value={{bebas, setBebas}}>
            {children}
        </ContextProvider.Provider>
    )
}