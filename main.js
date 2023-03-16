document.getElementById("clickme").onclick= function() {getAirQuality()};
function getAirQuality(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ef8b6f07dmsh1b08288610b38c4p1f1575jsn6e9c82ed467d',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};



const cityName = document.getElementById('city-name').value; 

let apiUrl = `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&addressdetails=1`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const latitude = data[0].lat;
    const longitude = data[0].lon;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  



//fetch(`https://air-quality.p.rapidapi.com/current/airquality?lon=${latitude}&lat=${longitude}`, options)
fetch(`https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
       // document.getElementById('aqi').innerHTML = response.data;
       document.getElementById('lat').innerHTML = response.lat;
       document.getElementById('lon').innerHTML = response.lon;
       //document.getElementById('statecode').innerHTML = response.state_code;
	   document.getElementById('aqi').innerHTML = response.data[0].aqi;
	   //document.getElementById('cityname').innerHTML = response.city_name;
	   document.getElementById('city').innerHTML = response.city_name;
	   document.getElementById('no2').innerHTML = response.data[0].no2;
	   document.getElementById('so2').innerHTML = response.data[0].so2;
	   document.getElementById('o3').innerHTML = response.data[0].o3;
	   document.getElementById('co').innerHTML = response.data[0].co;
	   document.getElementById('pm10').innerHTML = response.data[0].pm10;
	   document.getElementById('pm25').innerHTML = response.data[0].pm25;
	
    })
	//.catch(err => console.error(err));
})
.catch(error => console.error(error));
}