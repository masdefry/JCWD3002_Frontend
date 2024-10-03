import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'commerce', 
    storage, 
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reduxStore = configureStore({
    reducer: {
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persist = persistStore(reduxStore)