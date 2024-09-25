import { createContext, useState } from 'react';

export const GlobalProvider = createContext()

export const ContextProvider = ({children}) => {
    const [username, setUsername] = useState('')
    console.log('>>>')
    console.log(username)
    return(
        <GlobalProvider.Provider value={{username, setUsername}}>
            {children}
        </GlobalProvider.Provider>
    )
}