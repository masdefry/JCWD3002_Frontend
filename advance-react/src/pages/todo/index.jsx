import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TodoPage(){
    const [todo, setTodo] = useState([])

    const onFetchTodo = async() => {
        try {
            const res = await axios.get('http://localhost:5000/todo')
            setTodo(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const onMapTodo = () => {
        return todo.map((item, index) => {
            return(
                <tr>
                    <th>{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        onFetchTodo()
    }, [])

    return(
        <>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>List</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        onMapTodo()
                    }
                    </tbody>
                </table>
                </div>
        </>
    )
}