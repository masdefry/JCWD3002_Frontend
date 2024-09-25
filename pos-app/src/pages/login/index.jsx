import bgLogin from '../../../public/sumup-gzlX757B2v8-unsplash.jpg'
import useLoginHook from '../../hooks/useLoginHook';
import Children from '../../components/children';
import { GlobalProvider } from '../../providers/contextProvider';
import { useContext } from 'react';

function LoginPage() {
  const {
    setUsername
  } = useContext(GlobalProvider)
  
  const {
    inputUsername, 
    inputPassword,
    onLogin
  } = useLoginHook(setUsername)
  return (
    <div className='p-6 sm:p-10 lg:p-20'>
      <main className='flex flex-col lg:flex-row min-w-full h-auto lg:h-[500px] rounded-md shadow-2xl'>
        <section className='flex-1 bg-gray-100 relative'>
          <img
            src={bgLogin}
            alt='Background Login'
            className='rounded-t-md lg:rounded-l-md lg:rounded-tr-none w-full h-[250px] lg:h-full object-cover object-bottom'
          />
        </section>
        <section className='flex-1 flex flex-col justify-center items-center gap-5 p-6 lg:p-10'>
          <h1 className='text-3xl lg:text-4xl font-bold'>Login</h1>
          <p className='text-gray-500 max-w-[350px] text-center text-sm lg:text-base'>
            Welcome back! Please login into your account to continue!
          </p>
          <div className='w-full flex flex-col gap-3'>
            <label className='w-full input input-bordered flex items-center gap-2'>
              <input
                type='text'
                className='grow p-2 rounded-md'
                placeholder='Username'
                ref={inputUsername}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </label>
            <label className='input input-bordered flex items-center gap-2'>
              <input
                type='text'
                className='grow p-2 rounded-md'
                placeholder='Password'
                ref={inputPassword}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </label>
            <button onClick={onLogin} className='btn btn-primary w-full'>Login</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
  