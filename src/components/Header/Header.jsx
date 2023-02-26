import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { Search } from "@material-ui/icons";
import "../../index.css"


const Header = () => {

    return(
        <>
        <div className="nav static shadow-xl bg-blue-700 h-1/10 w-screen">
            <div className="nav__container flex justify-between">
                <h1 className=" text-white text-4xl p-6">Beach Party</h1>
                <input type="search" placeholder="  Find a party!" className="h-10 m-6 rounded-xl"></input>
            </div>
        </div>
        </>
    )
}

export default Header

        // <AppBar position ="static">
        //     <Toolbar className={classes.toolbar}>
        //         <Typography variant="h5" className={classes.title} >
        //             Beach Party
        //         </Typography>
        //         <Box display="flex"></Box>
        //             <Typography variant="h5" className={classes.title} >
        //                 Clean Ups Have Never Been More Fun
        //             </Typography>
        //             {/*<Autocomplete> */}
        //                 <div className={classes.search}>
        //                     <div className={classes.searchIcon}>
        //                         <Search></Search>
        //                     </div>
        //                 <InputBase placeholder="Where to?" classes={{root:classes.inputRoot,input:classes.inputInput}}/>
        //                 </div>
        //             {/*</Autocomplete> */}
        //     </Toolbar>

        // </AppBar>