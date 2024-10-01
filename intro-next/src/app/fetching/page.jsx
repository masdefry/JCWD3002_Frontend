// SSR
// const onFetchDataSSR = async() => {
//     try {
//         let res = await fetch('https://66fb763b8583ac93b40bd72f.mockapi.io/purwadhika/comments', {
//             cache: 'no-store'
//         })
        
//         res = await res.json()
        
//         return res
//     } catch (error) {
//         console.log(error)
//     }
// }

// SSG
// const onFetchDataSSG = async() => {
//     try {
//         let res = await fetch('https://66fb763b8583ac93b40bd72f.mockapi.io/purwadhika/comments', 
//             {
//                 cache: 'force-cache'
//             }
//         )
        
//         res = await res.json()
        
//         return res
//     } catch (error) {
//         console.log(error)
//     }
// }

// ISR
const onFetchDataISR = async() => {
    try {
        let res = await fetch('https://66fb763b8583ac93b40bd72f.mockapi.io/purwadhika/comments', 
            {
                cache: 'force-cache', 
                next: {
                    revalidate: 10
                }
            }
        )
        
        res = await res.json()
        
        return res
    } catch (error) {
        console.log(error)
    }
}

export default async function Page(){

    const comments = await onFetchDataISR()
    
    return(
        <>
            <h1 className='text-2xl font-bold'>
                Fetching Page 
            </h1>
            {
                comments.map((comment, index) => {
                    return(
                        <div>
                            {comment.comment}
                        </div>
                    )
                })
            }
        </>
    )
}