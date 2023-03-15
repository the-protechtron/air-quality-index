const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2940eca52fmsh7776fd6075141dfp1dbff3jsnd9b4d7d4e60e',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};

fetch('https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
       // console.log(response.data);
      // document.getElementById('aqi').innerHTML = response.data;
       document.getElementById('lat').innerHTML = response.lat;
       document.getElementById('lon').innerHTML = response.lon;
       document.getElementById('statecode').innerHTML = response.state_code;
	   document.getElementById('aqi').innerHTML = response.aqi;
	   
    })
	.catch(err => console.error(err));