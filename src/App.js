
import Header from "./components/Header/Header";
import List from "./components/List/List";
import BeachDetails from "./components/BeachDetails/BeachDetails";
import Map from "./components/Map/Map";
import { getBeachData } from "./api";
import { CssBaseline,Grid } from "@material-ui/core";
import { useEffect,useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    getBeachData().then((data) => {
      console.log(data);
      setPlaces(data);
    })
  },[]);

  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Map/>
          </Grid>
    </Grid>
    </>
  );
}

export default App;
