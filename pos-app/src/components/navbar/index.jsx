import {useLocation} from 'react-router-dom'

export default function Navbar(){
    const locationPathname = useLocation()
    
    if(locationPathname.pathname === '/login' || locationPathname.pathname === '/register') return <></>

    return(
        <main className='bg-blue-500 text-white py-3'>

        </main>
    )
}