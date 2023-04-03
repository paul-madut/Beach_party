import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signedIn,signedOut,loginUser } from '../Login/signedInSlice'
import "../../index.css"
import { auth } from "../Login/firebase";


const Header = () => {

    const dispatch = useDispatch();

    return(
        <>
        <div className="nav static shadow-xl bg-blue-700 h-1/10 w-screen">
            <div className="nav__container flex justify-between">
                <h1 className=" text-white text-4xl p-6">Beach Party</h1>
                <button onClick={()=>{auth.signOut();dispatch(signedOut())}} className="text-white px-2 my-4 rounded-xl border-2 border-white ">Logout</button>
                <input type="search" placeholder="  Find a party!" className="h-10 m-6 rounded-xl"></input>
            </div>
        </div>
        </>
    )
}

export default Header
