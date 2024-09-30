import Banner from "@/features/about-us/components/Banner"
import { Suspense } from "react"
import Loading from "./loading"

export default function AboutUsPage(){
    const isError = true 

    if(isError) throw new Error('Something Went Wrong!!!!!')

    return(
        <>
            <h1>
                About Us Page
            </h1>

            <Suspense fallback={<Loading />}>
                <Banner />
            </Suspense>
        </>
    )
}