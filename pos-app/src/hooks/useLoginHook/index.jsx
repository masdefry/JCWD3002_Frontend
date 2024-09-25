import { useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

function useLoginHook(setUsername){
    const inputUsername = useRef()
    const inputPassword = useRef()
    const navigate = useNavigate()

    const onLogin = async() => {
        try {
            const user = await axios.get(
                `http://localhost:5000/users?username=${inputUsername.current.value}&password=${inputPassword.current.value}`
            )
            
            if(user.data.length === 0) throw {message: 'Username or Password Invalid'}
            console.log(user.data[0].username)
            // toast.success('Login Success!')
            setUsername(user.data[0].username)
            navigate('/register')
        } catch (error) {
        toast.error(error.message)
        }
    }

    return {
        inputUsername, 
        inputPassword, 
        onLogin
    }
}

export default useLoginHook