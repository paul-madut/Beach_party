import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    logState: false,
    currentUser: null,
}

export const signedInSlice = createSlice({
  name: 'signinStatus',
  initialState,
  reducers: {
    signedIn: (state) => {
      state.logState = true
    },
    signedOut: (state) => {
      state.logState = false
    },
    loginUser: (state,user) => {
      state.currentUser = user
    },
  },
})

// Action creators are generated for each case reducer function
export const { signedIn, signedOut, loginUser} = signedInSlice.actions

export default signedInSlice.reducer