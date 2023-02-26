import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    logState: false
}

export const signedInSlice = createSlice({
  name: 'Sign in Status',
  initialState,
  reducers: {
    signedIn: (state) => {
      state.logState = true
    },
    signedOut: (state) => {
      state.logState = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { signedIn, signedOut} = signedInSlice.actions

export default signedInSlice.reducer