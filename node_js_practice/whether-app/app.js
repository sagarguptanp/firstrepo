console.log("Starting");
var request = require('request');


const GET_LAT_LONG_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Indore.json?access_token=pk.eyJ1Ijoic2FnZ3VndXB0YSIsImEiOiJjank5emt0OG0wOHp3M2RvMXZxODEyYWZiIn0.hHv92IAShPKoSxDmjh-6oQ";
request(GET_LAT_LONG_URL,(error,response)=>{
    debugger;
    const jsonData = response.body;
    const latitudeDetailObject = JSON.parse(response.body);
    console.log();
    const locationDetails = latitudeDetailObject.features[2].center;
    console.log(locationDetails);
    const url = `https://api.darksky.net/forecast/8fb9f5111a83c789a8448bb0dc1b9183/${locationDetails[1]},${locationDetails[0]}?units=si`;
    request(url,(error,response) => {
    const data = JSON.parse(response.body);
    console.log("current temperatur is %d ",data.currently.temperature); 
    console.log("Probability of rain is %d ",data.currently.precipProbability); 
});
})



console.log("Stoping");