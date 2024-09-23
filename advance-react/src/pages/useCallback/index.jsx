import { useState } from 'react';

export default function UseCallback(){
    const [input, setInput] = useState('')
    const [counter, setCounter] = useState(0)

    const onSetCounter = () => {
        setCounter(counter + 1)
    }

    return(
        <>
            <h1 className='text-3xl font-bold'>
                React Memo Page
            </h1>

            <div className='py-3'>
                <p>
                    {input}
                </p>
                <input 
                    className='px-3 py-3 input border border-black rounded-none focus:outline-none'
                    placeholder='Type Anything'
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <h1 className='text-3xl font-bold'>
                Counter: {counter}
            </h1>
            <h1 className='font-bold text-2xl'>
                ???
            </h1>

        </>
    )
}