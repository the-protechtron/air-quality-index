let lon= 77.586;
let lat=23.545;
let url='https://air-quality.p.rapidapi.com/current/airquality?lon='+lon+'&lat='+lat;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e78e12dd5msh14b8fc2448f3114p195c0bjsn5a48ca48946d',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
       // console.log(response.data);
      // document.getElementById('aqi').innerHTML = response.data;
       document.getElementById('lat').innerHTML = response.lat;
       document.getElementById('lon').innerHTML = response.lon;
       document.getElementById('statecode').innerHTML = response.state_code;
	   document.getElementById('aqi').innerHTML = response.data[0].aqi
	   
    })
	.catch(err => console.error(err));
