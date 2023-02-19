import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles"

const BeachDetails = ({place}) => {
    let placeData = place.place_name.split(',')

    return(
      <Card elevation={6}>
        <CardMedia
        style = {{height:350}}
        title={placeData[0]}
        image={'https://www.bestwesternsiestakey.com/wp-content/uploads/2022/02/Siesta-Key-red-lifeguard-stand-735x0-c-default.jpg'}
        />

        <CardContent>
          <Typography gutterBottom variant="h5">{placeData[0]}</Typography>
        </CardContent>

      </Card>
      
    )
}

export default BeachDetails