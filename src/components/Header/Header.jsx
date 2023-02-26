import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { Search } from "@material-ui/icons";
import "../../index.css"


const Header = () => {

    return(
        <>
        <div className="nav static shadow-xl bg-blue-700 h-1/10 w-screen">
            <div className="nav__container flex justify-between">
                <h1 className=" text-white text-4xl p-6">Beach Party</h1>
                <input type="search" placeholder="  Find a party!" className="h-10 m-6 rounded-xl"></input>
            </div>
        </div>
        </>
    )
}

export default Header
