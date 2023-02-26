import React, {useEffect, useState } from "react";
import { Autocomplete } from '@react-google-maps/api';
import { Search } from "@material-ui/icons";
import "../../index.css"
import auth from "./firebase"
import { signInWithPopup,GoogleAuthProvider } from "@firebase/auth";
import{useAuthState} from 'react-firebase-hooks/auth'
import { useDispatch, useSelector } from "react-redux";
import { signedIn,signedOut } from "./signedInSlice";


const Login = () => {

    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
      const result = await signInWithPopup(auth,googleAuth);
    }

    const [user,setUser] = useAuthState(auth);
    const logState = useSelector((state) => state.loggedIn.logState)
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(logState)
            
        if(user ==  null){
            dispatch(signedOut());
        }
        else{
            dispatch(signedIn());
        }
      },
      [user])
    
  

    return(
        <>
        <div className=" justify-center flex align-middle bg-cover h-screen background bg-[url('https://static.vecteezy.com/system/resources/thumbnails/003/439/682/original/cartoon-background-simple-beach-free-video.jpg')]">
            <div className="login__panel h-1/2 w-1/3 bg-white shadow-2xl self-center mb-20 rounded-3xl">
            <form className=" px-8 py-6">
            <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        {!logState ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        :
        <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={()=>{auth.signOut();dispatch(signedOut())}}>
          Sign Out
        </button>}
        
        
      </div>
    </form>
    <div className="signInPartners justify-center">
        <h1 className="">Sign In with Partner</h1>
        <button onClick={login} className=" text-blue-400 border-2 border-blue-600 rounded-full p-2 m-2 hover:bg-blue-600 hover:text-white shadow-md"> Google</button>

    </div>
                
            </div>
        </div>
        </>
    )
}

export default Login