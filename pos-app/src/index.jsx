import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { PiPasswordThin } from 'react-icons/pi';
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';

function RegisterPage() {
  const [inputUsername, setUsername] = useState('')  
  const [inputPassword, setPassword] = useState('')  
  const [inputEmail, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)  

    const onRegister = async() => {
        // console.log('>>>')
        // try {
        //     await axios.post('http://localhost:5000/users', {
        //         username: inputUsername.current.value, 
        //         password: inputPassword.current.value, 
        //         email: inputEmail.current.value
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }

  return (
    <div className='p-6 sm:p-10 lg:p-20'>
      <main className='flex flex-col min-w-full h-auto lg:h-[500px] rounded-md shadow-2xl'>
        <section className='flex-1 flex flex-col justify-center items-center gap-5 p-6 lg:p-10'>
          <h1 className='text-3xl lg:text-4xl font-bold'>Register Account</h1>
          <p className='text-gray-500 max-w-[350px] text-center text-sm lg:text-base'>
            Let's become a new member!
          </p>
          <div className='w-full flex flex-col gap-3'>
            <label className='w-full input input-bordered flex items-center gap-2'>
              <input
                type='text'
                className='grow p-2 rounded-md'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <AiOutlineUser />
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              <input
                type={showPassword? 'text' : 'password'}
                className='grow p-2 rounded-md'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <PiPasswordThin onClick={() => setShowPassword(true)} />
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              <input
                type='text'
                className='grow p-2 rounded-md'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail />
            </label>
            <button onClick={onRegister} disabled={inputUsername === '' || inputEmail === '' || inputPassword === ''? true : false} className='btn btn-primary w-full'>Register Account</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;
  