import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    username: Yup.string().required('Username must be filled'),
    email:Yup.string().email('Email invalid').required('Email must be filled'), 
    password: Yup.string().required('Password must be filled')
})