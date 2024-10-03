'use client';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import {registerSchema} from '@/features/register/schemas/registerSchema';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function RegisterPage(){

    const {mutate: mutationPostUser, isPending} = useMutation({
        mutationFn: async(values) => {
            return await axios.post('http://localhost:5000/users', {
                ...values, 
                role: 'USER'
            })
        }, 
        onSuccess: (res) => {
            console.log(res)
        }, 
        onError: (err) => {
            console.log(err)
        }
    })

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
                        mutationPostUser(values)
                    }}
                >   
                    {/* dirty: Akan Bernilai true Ketika Salah Satu Field Input Sudah Terisi */}
                    {/* isValid: Akan Bernilai true Ketika Seluruh Field nya === Valid */}
                    {({isValid, dirty}) => {
                        return(
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
                                <button disabled={isPending === true || isValid === false || dirty === false} className={`btn bg-black text-white rounded-none w-full max-w-xs`}>
                                    Create Account 
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
                <h1 className='py-10'>
                    Already have account? Login here 
                </h1>
            </section>
        </main>
    )
}