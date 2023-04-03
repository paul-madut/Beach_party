import axios from "axios";

export const getBeachData = async (ne, sw) => {
  const options = {
    place: "beach",
    token:
      "pk.eyJ1IjoicG1hZHV0MjAwMyIsImEiOiJjbGR5eXBnMHcwdnh0M29vbHVzcXRoejBjIn0.txHWC_vEPKGzlPxlhFHdbw",
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitutde: ne.lng,
    itemQuantity: "10",
  };
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${options.place}.json?bbox=${options.bl_longitude}%2C${options.bl_latitude}%2C${options.tr_longitutde}%2C${options.tr_latitude}&limit=${options.itemQuantity}&types=poi&access_token=${options.token}`;

  try {
    const { data } = await axios.get(URL);

    return data.features;
  } catch (error) {
    console.log("sad");
  }
};

export default getBeachData;
