'use client';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import { loginSchema } from '@/features/login/schemas/loginSchema';
import useLoginHook from '@/features/login/hooks/useLoginHook';

export default function LoginPage(){

    const {mutationGetUser, isPendingMutationGetUser} = useLoginHook()

    return(
        <main>
            <section className='flex flex-col items-center gap-3 p-10'>
                <h1 className='font-bold text-3xl'>
                    Login Account
                </h1>
                <hr className='w-[75px] border border-gray-900 border-3' />
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}

                    validationSchema={loginSchema}

                    onSubmit={(values) => {
                        mutationGetUser(values)
                    }}
                >
                    <Form className='flex flex-col items-center gap-3 p-10 w-full'> 
                        <label className='form-control w-full max-w-xs'>
                            <Field name='username' type='text' placeholder='Username' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage component={'div'} className='text-red-500' name='username' />
                        </label>
                        <label className='form-control w-full max-w-xs'>
                            <Field name='password' type='text' placeholder='Password' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage name='password' />
                        </label>
                        <button className={`btn bg-black text-white rounded-none w-full max-w-xs`}>
                            Login
                        </button>
                    </Form>
                </Formik>
                <h1 className='py-10'>
                    Don't have account? Create account here 
                </h1>
            </section>
        </main>
    )
}