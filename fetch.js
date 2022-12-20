const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5a27479e76msh35f92c76af9f158p1e9fb5jsna2a62a8db5d4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{

	cityName.innerHTML = city;
	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
	  options
	)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
	
		cloud_pct.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
		// wind_degrees.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
	  })
	  .catch((err) => console.error(err));

}

submit.addEventListener("click" , (e)=>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Ranchi")

quick1.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather("Delhi");
})
quick2.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather("Ranchi");
})