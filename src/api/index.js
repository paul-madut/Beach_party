import axios from "axios";

const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/beach.json?bbox=-180%2C-90%2C180%2C90&limit=7&proximity=-75.737702%2C45.293283&types=poi&access_token=pk.eyJ1IjoicG1hZHV0MjAwMyIsImEiOiJjbGR5eXBnMHcwdnh0M29vbHVzcXRoejBjIn0.txHWC_vEPKGzlPxlhFHdbw'
const options={
    blank:''
}

export const getBeachData = async() =>{
    try {
        const {data} = await axios.get(URL);
        return data.features;
    } catch(error){
        console.log("sad")
    }
}

export default getBeachData
