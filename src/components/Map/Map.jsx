import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { MapContext } from "../../App";
import { Paper, Typography,useMediaQuery } from "@material-ui/core";
import { LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";



import useStyles from './styles'

const Map = () => {

    const {setBounds,setCoordinates,bounds,coordinates} = useContext(MapContext); 
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');


    return(
        <div className={classes.mapContainer}>
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