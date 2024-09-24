import { useCallback, useState } from "react"
import ButtonChild from "../../components/buttonChild"

export default function UseCallbackPage(){
    const [counter, setCounter] = useState(0)
    const [inputAnything, setInputAnything] = useState('')

    const getInput = (e) => {
        setInputAnything(e.target.value)
    }

    const increment = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    return(
        <main className='p-5'>
            <h1 className='text-3xl font-bold'>
                Use Callback
            </h1>
            <h1 className='text-xl font-bold'>
                {inputAnything}
            </h1>
            <input onChange={(event) => getInput(event)} placeholder='Type Anything' className='border border-gray-300 rounded-md p-3' />
            <h1 className='text-3xl font-bold'>
                {counter }
            </h1>
            <ButtonChild any={increment} />
        </main>
    )
}