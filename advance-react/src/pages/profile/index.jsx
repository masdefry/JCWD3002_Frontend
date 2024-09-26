import { useContext } from "react"
import { ContextProvider } from "../../providers/ContextProvider"

export default function ProfilePage(){

    const {
        bebas
    } = useContext(ContextProvider)

    return(
        <>
            <h1>
                Profile Page
            </h1>
            {bebas}
        </>
    )
}