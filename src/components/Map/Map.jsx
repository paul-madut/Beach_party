import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography,useMediaQuery } from "@material-ui/core";
import { LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";


import useStyles from './styles'

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat: 45.293283, lng: -75.737702};
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
            bootstrapURLKeys = {{key:'AIzaSyAsgIN3HHyJfp4QkZsUW3g-PUyf4lKFby8'}}
            defaultCenter={coordinates}
            center = {coordinates}
            defaultZoom = {14}
            margin = {[50,50,50,50]}
            options={''}
            onChange ={''}
            onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    );


        }

export default Map