import { configureStore } from '@reduxjs/toolkit'
import  AuthSlice from './features/Auth'

export const store = configureStore({
  reducer: {

    auth:AuthSlice
  },
})