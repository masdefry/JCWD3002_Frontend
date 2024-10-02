Hello, JCWD3002!

1. How to Install NextJS Latest Version (> Version 13)

                npx create-next-app@latest project-name

                - Would you like to use TypeScript? No / Yes

                - Would you like to use ESLint? Yes

                - Would you like to use Tailwind CSS? Yes
 
                - Would you like to use `src/` directory? Yes

                - Would you like to use App Router? Yes

                - Would you like to customize the default import alias (@/*)? Yes

                - What import alias would you like configured? @/*

2. How to Run NextJS Project?

                npm run dev

3. How to Create Form Validation using Formik & Yup?

        - Install Dependency

                npm i formik yup
        
        - Create Validation Schema

                import * as Yup from 'yup';

                export const registerSchema = Yup.object().shape({
                    username: Yup.string().required('Username must be filled'),
                    email:Yup.string().email('Email invalid').required('Email must be filled'), 
                    password: Yup.string().required('Password must be filled')
                })

        - Wrap Your Input and Submit Button with Formik Component. Also Import Your 
          Validation Schema 

                <Formik
                    initialValues={{
                        username: ''
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



