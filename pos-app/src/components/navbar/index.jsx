import {useLocation} from 'react-router-dom'
import { GlobalProvider } from './../../providers/ContextProvider';
import { useContext } from 'react';

export default function Navbar(){
    const locationPathname = useLocation()
    const {
        username 
    } = useContext(GlobalProvider)
    
    if(locationPathname.pathname === '/login' || locationPathname.pathname === '/register') return <></>

    return(
        <main className='bg-blue-800 text-white px-3 py-5'>
            <h1 className='font-bold'>
                Hello, {username}!
            </h1>
        </main>
    )
}