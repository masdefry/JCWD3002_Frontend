import axios from 'axios';
import { useEffect, useState } from 'react';

export default function NetworkCall(){
    const [data, setData] = useState([])

    const onFetchData = async() => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetchData()
    }, [])

    return(
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.title}
                        </div>
                    )
                })
            }
        </>
    )
}