import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase,Box  } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return(
        <>
        <AppBar position ="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title} >
                    Beach Party
                </Typography>
                <Box display="flex"></Box>
                    <Typography variant="h5" className={classes.title} >
                        Clean Ups Have Never Been More Fun
                    </Typography>
                    {/*<Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search></Search>
                            </div>
                        <InputBase placeholder="Where to?" classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                        </div>
                    {/*</Autocomplete> */}
            </Toolbar>

        </AppBar>
        </>
    )
}

export default Header
