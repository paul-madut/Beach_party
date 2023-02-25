import React from "react";
import { useState } from "react";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from "@material-ui/core";
import BeachDetails from "../BeachDetails/BeachDetails";


const List = ({places}) => {

    const [type, setType] = useState('beaches');
    const [distance, setDistance] = useState(5);

    return(
        <div className="">
            <Typography variant="h4">Beaches and Parks near you</Typography>
            <FormControl className="">
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="beaches">Beaches</MenuItem>
                    <MenuItem value="parks">Parks</MenuItem>
                </Select>
            </FormControl>
            <FormControl className="">
                <InputLabel>Distance</InputLabel>
                <Select value={distance} onChange={(e) => setDistance(e.target.value)}>
                    <MenuItem value={5}>5km</MenuItem>
                    <MenuItem value={10}>10km</MenuItem>
                    <MenuItem value={25}>25km</MenuItem>
                    <MenuItem value={50}>50km</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className="">
                <Grid item key={1}>
                {places?.map((place,i) => (
                    <Grid item key ={i} xs={12}>
                    <BeachDetails place ={place}/>
                    </Grid>
                ))}
                 </Grid>
            </Grid>
        </div>
    )
}

export default List