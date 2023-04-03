import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";
import Chat from "../Chat/Chat";
import { getBeachData } from "../../api";
import { CssBaseline,Grid } from "@material-ui/core";
import { useEffect,useState } from "react";
import React from "react";
import { BrowserRouter,Route, Routes, Link } from "react-router-dom";

import "../../index.css"



export const MapContext = React.createContext();

function Main() {
    const [places, setPlaces] = useState();

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({ne:0,sw:0});
    
    useEffect(()=>{
      getBeachData(bounds.ne, bounds.sw).then((data) => {
        
        setPlaces(data);
  
      })
    },[coordinates,bounds]);
    
    useEffect(()=> {
    
      navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
      })
    },[])
  
    return (
      <div className="page overflow-x-hidden h-screen bg-cover bg-[url('https://w0.peakpx.com/wallpaper/135/655/HD-wallpaper-sand-cartoon-texture-sand-cartoon-background-surface-texture-sand-texture-summer-background-sand-background-cartoon-surface-texture.jpg')]">
  
      <MapContext.Provider value={{setBounds, setCoordinates, bounds, coordinates}}>

      <Header/>
      <div className=" grid grid-cols-3 w-screen h-screen ">
            <div className="w-full h-full">
              <List places ={places}/>
            </div>
            <div className="w-full h-full">
              <Map/>
            </div>
            <div className="w-full h-full">
              <Chat/>
            </div>
      </div>
      </MapContext.Provider>
      </div>

  );
}

export default Main;