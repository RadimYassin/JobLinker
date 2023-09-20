import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
 
            console.log(state);
        },
        logoutUser: (state) => {
            console.log("salam");
        },

    },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = AuthSlice.actions

export default AuthSlice.reducer