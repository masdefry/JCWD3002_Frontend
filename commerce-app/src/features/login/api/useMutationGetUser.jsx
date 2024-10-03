import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useDispatch } from 'react-redux';
import {setAuth} from '@/redux/slice/authSlice';

export function useMutationGetUser(){
    const dispatch = useDispatch()

    const {mutate: mutationGetUser, isPending: isPendingMutationGetUser} = useMutation({
        mutationFn: async(values) => {
            return await axios.get(`http://localhost:5000/users?username=${values.username}&password=${values.password}`)
        },
        onSuccess: (res) => {
            console.log(res)
            dispatch(setAuth(res.data[0].username))
        }, 
        onError: (err) => {
            console.log(err)
        }
    })

    return{
        mutationGetUser, isPendingMutationGetUser
    }
}