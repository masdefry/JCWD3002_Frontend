import './App.css';
import HomeClass from './pages/class';

// Setup React Router DOM
import { Routes, Route } from 'react-router-dom';
import HomeFunction from './pages/function';
import UseRef from './pages/useRef';
import UseCallback from './pages/useCallback';

function App(){
  return(
    <>
      <Routes>
        <Route path='/home-class' element={<HomeClass />} />
        <Route path='/home-function' element={<HomeFunction />} />
        <Route path='/use-ref' element={<UseRef />} />
        <Route path='/use-callback' element={<UseCallback />} />
      </Routes>
    </>
  )
}

export default App
