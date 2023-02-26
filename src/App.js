
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getBeachData } from "./api";
import { CssBaseline,Grid } from "@material-ui/core";
import { useEffect,useState } from "react";
import React from "react";

import "./index.css"



export const MapContext = React.createContext();

function App() {
  const [places, setPlaces] = useState();

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ne:0,sw:0});
  
  useEffect(()=>{
    getBeachData(bounds.ne, bounds.sw).then((data) => {
      console.log(data)
      setPlaces(data);

    })
  },[coordinates,bounds]);
  
  useEffect(()=> {
  
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
    setCoordinates({lat:latitude,lng:longitude});
    })
  },[])

  return (
    <div className="page h-screen bg-cover bg-[url('https://w0.peakpx.com/wallpaper/135/655/HD-wallpaper-sand-cartoon-texture-sand-cartoon-background-surface-texture-sand-texture-summer-background-sand-background-cartoon-surface-texture.jpg')]">

    <MapContext.Provider value={{setBounds, setCoordinates, bounds, coordinates}}>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List places ={places}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Map/>
            
            
          </Grid>
    </Grid>
    </MapContext.Provider>
    </div>
  );
}

export default App;
