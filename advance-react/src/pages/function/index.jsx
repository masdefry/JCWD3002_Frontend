import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HomeFunction(){
    // const [stateName, setStateFunctionName] = useState(initialValue)
    const [number, setNumber] = useState(0)
    const [activity, setActivity] = useState(['Makan', 'Tidur', 'Belajar'])

    const ChangeNumber = () => {
        setNumber(number + 1)
    }

    const ChangeActivity = () => {
        const currentActivity = [...activity]
        currentActivity.push('Ngoding') 
        setActivity(currentActivity)
    }

    // componentDidMount 
    useEffect(() => {
        console.log('Component Did Mount Running')
    }, [])

    // componentDidUpdate

    useEffect(() => {
        console.log('Component Did Update Running')
    }, [number])

    useEffect(() => {
        console.log('Component Did Update Running')
    }, [activity])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            alert('Component Will Unmount')
        }
    }, [])

    return(
        <>
            <h1 className='text-xl font-bold'>
                Function Page
            </h1>
            <h1 className='text-xl'>
                {number}
            </h1>
            <button className='btn bg-blue-500 text-white p-1 rounded-md' onClick={ChangeNumber}>
                Increment
            </button>

            <h1 className='text-xl font-bold'>
                Activity 
            </h1>
            <ol>
                {
                    activity.map((item, index) => {
                        return(
                            <li>
                                {item}
                            </li>
                        )
                    })
                }
            </ol>
            <button className='btn bg-blue-500 text-white p-1 rounded-md' onClick={ChangeActivity}>
                Add Activity
            </button>
            
            <Link to='/home-class'>
                
                <h1>
                    Go to Class 
            </h1>
            </Link>
        </>
    )
}