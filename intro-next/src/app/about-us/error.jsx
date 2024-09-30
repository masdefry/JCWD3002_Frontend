'use client';

export default function Error({error, reset}){
    console.log(error)
    return(
        <>
            {error.message}
            <button onClick={() => reset()}>
                Try Again
            </button>
        </>
    )
}