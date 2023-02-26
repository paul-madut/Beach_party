import { configureStore } from "@reduxjs/toolkit";
import signedInReducer from '../components/Login/signedInSlice'


export default configureStore({
    reducer: {
        loggedIn:signedInReducer,
    }
})