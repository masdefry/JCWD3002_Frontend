import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';

export default function TodoPage(){
    const [todo, setTodo] = useState([])
    const inputTodo = useRef()
    const inputTodoPlace = useRef()

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
                    <td><button onClick={() => onDeleteTodo(item.id)} className='btn bg-red-600 text-white rounded-md p-3'>Delete</button></td>
                </tr>
            )
        })
    }

    const onPostTodo = async() => {
        try {
            if(!inputTodo.current.value || !inputTodoPlace.current.value) throw {message: 'Input Must be Filled!'}

            // Step-01
            const res = await axios.post('http://localhost:5000/todo', {
                name: inputTodo.current.value, 
                place: inputTodoPlace.current.value
            })

            inputTodo.current.value = ''
            inputTodoPlace.current.value = ''
            toast.success('Create Todo Success!', {
                position: 'top-center'
            })
            onFetchTodo()
        } catch (error) {
            console.log(error)
            toast.error(error.message, {
                position: 'top-center'
            })
        }
    }

    const onDeleteTodo = async(id) => {
       try {
            await axios.delete(`http://localhost:5000/todo/${id}`)

            toast.success('Delete Todo Success!')
            onFetchTodo()
       } catch (error) {
            toast.error(error.message)
       }
    }

    useEffect(() => {
        onFetchTodo()
    }, [])

    return(
        <>
            <section className='p-10'>
                <label className='form-control w-full max-w-xs'>
                    <div className='label'>
                        <span className='label-text font-bold'>Input Todo:</span>
                    </div>
                    <input ref={inputTodo} type='text' placeholder='Type Your Todo' className='input input-bordered w-full max-w-xs' />
                </label>
                <label className='form-control w-full max-w-xs'>
                    <div className='label'>
                        <span className='label-text font-bold'>Input Place:</span>
                    </div>
                    <input ref={inputTodoPlace} type='text' placeholder='Type Your Todo Place' className='input input-bordered w-full max-w-xs' />
                </label>
                <button onClick={onPostTodo} className='btn bg-blue-500 text-white mt-3'>
                    Create Todo 
                </button>
            </section>
            <div className='overflow-x-auto'>
                <table className='table'>
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>List</th>
                        <th>Location</th>
                        <th>Action</th>
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