import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { Search } from "@material-ui/icons";
import "../../index.css"
import auth from "./firebase"
import { signInWithPopup,GoogleAuthProvider } from "@firebase/auth";

const Login = () => {

    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
      const result = await signInWithPopup(auth,googleAuth);
    }
  

    return(
        <>
        <div className=" justify-center flex align-middle bg-cover h-screen background bg-[url('https://static.vecteezy.com/system/resources/thumbnails/003/439/682/original/cartoon-background-simple-beach-free-video.jpg')]">
            <div className="login__panel h-1/2 w-1/3 bg-white shadow-2xl self-center mb-20 rounded-3xl">
            <form class=" px-8 py-6">
            <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
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