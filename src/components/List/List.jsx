import React from "react";
import { useState } from "react";
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from "@material-ui/core";

import useStyles from './styles'
const List = () => {
    const classes  = useStyles();
    const [type, setType] = useState('beaches');
    const [distance, setDistance] = useState(5);
    return(
        <div className={classes.container}>
            <Typography variant="h4">Beaches and Parks near you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="beaches">Beaches</MenuItem>
                    <MenuItem value="parks">Parks</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Distance</InputLabel>
                <Select value={distance} onChange={(e) => setDistance(e.target.value)}>
                    <MenuItem value={5}>5km</MenuItem>
                    <MenuItem value={10}>10km</MenuItem>
                    <MenuItem value={25}>25km</MenuItem>
                    <MenuItem value={50}>50km</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List