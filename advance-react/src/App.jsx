import './App.css';
import HomeClass from './pages/class';

// Setup React Router DOM
import { Routes, Route } from 'react-router-dom';
import HomeFunction from './pages/function';

function App(){
  return(
    <>
      <Routes>
        <Route path='/home-class' element={<HomeClass />} />
        <Route path='/home-function' element={<HomeFunction />} />
      </Routes>
    </>
  )
}

export default App
