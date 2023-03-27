import React from "react";
import { LocationOnOutlined } from "@material-ui/icons";

const BeachDetails = ({place}) => {
    let placeData = place.place_name.split(',')

    return(
      <div className="card w-2/3 bg-white overflow-hidden rounded-3xl border-2 shadow-2xl border-blue-600 h-full  w-full">
        <h1 className=" text-2xl p-2"> {placeData[0]} </h1>

        <img src="https://wallpaper.dog/large/10722978.jpg"></img>

         <div className="location flex justify-around">
           <LocationOnOutlined/>
           <h3>{placeData[1]}</h3>
         </div> 

        <div className="buttons flex  justify-around">
          <button>Create Party</button>
          <button>Join Party</button>
        </div>


      </div>
    )
}

export default BeachDetails