import './App.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import SectionLeft from './components/SectionLeft';
import SectionRight from './components/SectionRight';
import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])
  const [indexSelected, setIndexSelected] = useState([])

  const onFetchTodo = async() => {
    try {
      const response = await axios.get('http://localhost:5000/todos')
      console.log(response)
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onSelectTodo = (index) => {
    const currentIndexSelected = [...indexSelected]
    currentIndexSelected.push(index)
    setIndexSelected(currentIndexSelected)
  }

  useEffect(() => {
    onFetchTodo()
  }, [])

  return (
    <main className='grid grid-cols-3 p-3'>
      <SectionLeft dataTodos={todos} onSelectTodo={onSelectTodo} indexSelected={indexSelected} />
      <section className='flex justify-center items-center'>
        <button className='w-[30%] flex justify-center items-center gap-3 btn bg-red-500 text-white p-3 rounded-md'>
          <IoIosArrowDroprightCircle className='text-xl' />
        </button>
      </section>
      <SectionRight />
    </main>
  )
}

export default App;
