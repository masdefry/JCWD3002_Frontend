import './App.css';
import HomeClass from './pages/class';

// Setup React Router DOM
import { Routes, Route } from 'react-router-dom';
import HomeFunction from './pages/function';
import UseRef from './pages/useRef';
import NetworkCall from './pages/networkCall';
import MemoPage from './pages/memo';
import UseCallbackPage from './pages/useCallback';
import TodoPage from './pages/todo';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return(
    <>
      <ToastContainer />
      <Routes>
        <Route path='/home-class' element={<HomeClass />} />
        <Route path='/home-function' element={<HomeFunction />} />
        <Route path='/use-ref' element={<UseRef />} />
        <Route path='/network-call' element={<NetworkCall />} />
        <Route path='/memo' element={<MemoPage />} />
        <Route path='/use-callback' element={<UseCallbackPage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </>
  )
}

export default App
