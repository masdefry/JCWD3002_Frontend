import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function useRegisterHook(){
    
  const [inputUsername, setInputUsername] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [hideButton, setHideButton] = useState(false)

    const onRegister = async() => {
        try {
            setHideButton(true)
            await axios.post('http://localhost:5000/users', {
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

    return {
        inputUsername, 
        setInputUsername, 
        inputEmail, 
        setInputEmail, 
        inputPassword, 
        setInputPassword,
        showPassword, 
        setShowPassword, 
        hideButton, 
        setHideButton, 
        onRegister
    }
}