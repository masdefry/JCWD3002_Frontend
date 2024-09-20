// import FunctionName from 'directory/FileName'
import Child from './components/Child'; // Otomatis Membaca File `index.jsx`
import List from './components/List';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Todo from './pages/Todo';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import './App.css';

// Setup React Router DOM
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
