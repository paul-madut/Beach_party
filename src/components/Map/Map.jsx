import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { MapContext } from "../Main/Main";


const Map = () => {

    const {setBounds,setCoordinates,bounds,coordinates} = useContext(MapContext); 


    return(
        <div className=" mt-4 h-[85vh]">
            <GoogleMapReact 
            bootstrapURLKeys = {{key:'AIzaSyAsgIN3HHyJfp4QkZsUW3g-PUyf4lKFby8'}}
            defaultCenter={coordinates}
            center = {coordinates}
            defaultZoom = {14}
            margin = {[50,50,50,50]}
            options={''}
            onChange={(e) => {
                setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
              }}
            onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    );


        }

export default Map