const onFetchPosts = async() => {
    try {
        let res = await fetch('https://66fb763b8583ac93b40bd72f.mockapi.io/purwadhika/posts', {
            cache: 'no-store'
        })

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 5000)
        })

        res = await res.json()

        return res
    } catch (error) {
        throw new Error(error) 
    }
}

export default async function SectionPosts(){

    const posts = await onFetchPosts()

    return(
        <>
            <h1>Posts</h1>
            {
                JSON.stringify(posts)
            }
        </>
    )
}