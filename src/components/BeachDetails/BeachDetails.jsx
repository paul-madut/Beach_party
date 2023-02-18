import React from "react";

const BeachDetails = ({place}) => {
    let placeData = place.place_name.split(',')

    return(
      <h1> {placeData[0]} </h1>
    )
}

export default BeachDetails