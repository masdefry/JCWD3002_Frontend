import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: {
        username: '',
        role: ''
    }
}

export const authSlice = createSlice({
    name: 'auth', 
    initialState, 
    reducers: {
        setAuth: (initialState, action) => {
            initialState.auth.username = action.payload
        }
    }
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer