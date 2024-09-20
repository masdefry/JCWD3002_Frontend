// import FunctionName from 'directory/FileName'
import Child from './components/Child'; // Otomatis Membaca File `index.jsx`
import List from './components/List';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Todo from './pages/Todo';

import './App.css';

// Setup React Router DOM
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <>
      {/* <h1 id='purwadhika'>
        Purwadhika
      </h1>
      <h1 style={{ color: 'blue', fontSize: '100px' }}>
        Purwadhika
      </h1>
      <Child greeting='Hello'/>
      <List activity='Futsal' /> */}
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
