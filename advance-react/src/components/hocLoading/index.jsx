import { useEffect, useState } from "react"

export default function HOCLoading({children}){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    if(loading === true) return(
        <h1>
            Loading...
        </h1>
    )

    return(
        <>
         {console.log('HOC Loading')}
            {children}
        </>
    )
}