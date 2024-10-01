// Sequential   : Seri (Urut)
// Paralel      : Bersamaan


import SectionPosts from "@/features/fetching-pattern/components/SectionPosts"
import { Suspense } from "react"

const onFetchComments = async() => {
    try {
        let res = await fetch('https://66fb763b8583ac93b40bd72f.mockapi.io/purwadhika/comments', {
            cache: 'no-store'
        })
        res = await res.json()

        return res
    } catch (error) {
        throw new Error(error)     
    }
}


export default async function Page(){

    const comments = await onFetchComments()

    return(
        <>
            <h1>
                Fetching Pattern Page 
            </h1>
            <h1>Comments</h1>
            {
                JSON.stringify(comments)
            }

            <Suspense fallback={<h1>Loading...</h1>}>
                <SectionPosts />
            </Suspense>
        </>
    )
}