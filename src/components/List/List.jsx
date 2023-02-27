import React from "react";
import { useState } from "react";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from "@material-ui/core";
import BeachDetails from "../BeachDetails/BeachDetails";
import { FlipRounded } from "@material-ui/icons";


const List = ({places}) => {

    const [type, setType] = useState('beaches');
    const [distance, setDistance] = useState(5);

    return(
        <div className="">
            <h1 className=" text-4xl p-1 m-1">Beaches and Parks near you</h1>
            <div className="forms flex space-x-8 pl-3 pt-4">

            <form className="">
                <label>Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="beaches">Beaches</option>
                    <option value="parks">Parks</option>
                </select>
            </form>
            <form className="">
                <label>Distance</label>
                <select value={distance} onChange={(e) => setDistance(e.target.value)}>
                    <option value={5}>5km</option>
                    <option value={10}>10km</option>
                    <option value={25}>25km</option>
                    <option value={50}>50km</option>
                </select>
            </form>
            </div>
            <div className="cards grid grid-cols-3">
                <div className="item" key={1}>
                    {places?.map((place,i)=> (
                        <div className="item" key={i}>
                            <BeachDetails place={place}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List
export default List