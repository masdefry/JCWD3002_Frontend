'use client';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import {registerSchema} from '@/features/register/schemas/registerSchema';

export default function RegisterPage(){
    return(
        <main>
            <section className='flex flex-col items-center gap-3 p-10'>
                <h1 className='font-bold text-3xl'>
                    Create Account
                </h1>
                <hr className='w-[75px] border border-gray-900 border-3' />
                <Formik
                    initialValues={{
                        username: '', 
                        email: '', 
                        password: ''
                    }}

                    validationSchema={registerSchema}

                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <Form className='flex flex-col items-center gap-3 p-10 w-full'> 
                        <label className='form-control w-full max-w-xs'>
                            <Field name='username' type='text' placeholder='Username' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage component={'div'} className='text-red-500' name='username' />
                        </label>
                        <label className='form-control w-full max-w-xs'>
                            <Field name='email' type='text' placeholder='Email' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage name='email' />
                        </label>
                        <label className='form-control w-full max-w-xs'>
                            <Field name='password' type='text' placeholder='Password' className='input input-bordered w-full max-w-xs rounded-none' />
                            <ErrorMessage name='password' />
                        </label>
                        <button className='btn bg-black text-white rounded-none w-full max-w-xs'>
                            Create Account 
                        </button>
                    </Form>
                </Formik>
                <h1 className='py-10'>
                    Already have account? Login here 
                </h1>
            </section>
        </main>
    )
}