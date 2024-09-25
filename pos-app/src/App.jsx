import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/index';
import RegisterPage from './pages/register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
  