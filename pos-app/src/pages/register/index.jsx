import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { PiPasswordThin } from 'react-icons/pi';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function RegisterPage() {  
  const [inputUsername, setInputUsername] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [hideButton, setHideButton] = useState(false)

    const onRegister = async() => {
        try {
            setHideButton(true)
            await axios.post('http://localhost:5000/usersss', {
                username: inputUsername, 
                password: inputPassword, 
                email: inputEmail
            })
            toast.success('Register Success')
            setInputEmail('')
            setInputPassword('')
            setInputUsername('')
        } catch (error) {
            toast.error('Something Went Wrong!')
        } finally {
          console.log('>>>')
          setHideButton(false)
        }
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
                value={inputUsername}
                type='text'
                className='grow p-2 rounded-md'
                placeholder='Username'
                onChange={(e) => setInputUsername(e.target.value)}
              />
              <AiOutlineUser />
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              <input
                value={inputPassword}
                type={showPassword === true? 'text' : 'password'}
                className='grow p-2 rounded-md'
                placeholder='Password'
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <PiPasswordThin onClick={() => setShowPassword(!showPassword)} />
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              <input
                value={inputEmail}
                type='text'
                className='grow p-2 rounded-md'
                placeholder='Email'
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <AiOutlineMail />
            </label>
            <button disabled={(inputUsername === '' || inputPassword === '' || inputEmail === '') || hideButton === true? true : false} onClick={onRegister} className='btn btn-primary w-full'>Register Account</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;
  