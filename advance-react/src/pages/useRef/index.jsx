import { useRef } from 'react'

export default function UseRef(){
    const inputAnything = useRef()

    const onSubmit = () => {
        console.log(inputAnything.current.value)
    }

    return(
        <>
            <input type='text' ref={inputAnything} placeholder='Enter Anything' />
            <button onClick={onSubmit}>
                Submit 
            </button>
        </>
    )
}