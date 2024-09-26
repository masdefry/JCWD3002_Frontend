import { useContext } from "react"
import { ContextProvider } from "../../providers/ContextProvider"
import { Link } from "react-router-dom"

export default function HomePage(){
    const {
        setBebas
    } = useContext(ContextProvider)

    return(
        <>
            <h1>Home Page</h1>
            <button onClick={() => setBebas('asasaksalsalkslaksaslkaslaslkaslkalskalks')}>
                SetBebas 
            </button>
            <Link to='/profile'>
                Go to Profile 
            </Link>
        </>
    )
}