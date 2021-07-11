const currentCity = document.querySelector('.city');
const currentTemp = document.querySelector('.temp');
const weatherText = document.querySelector('.weather-text');
const wind = document.querySelector('.wind-speed');
const uv = document.querySelector('.uv');
const humidity = document.querySelector('.humidity');

const feelsLike = document.querySelector('.feels-like');

let weatherToday = {
	api: 'p6WqcUxVySBDjHDgfTYjzEwixHbo0GAx',

	getCity: function (city) {
		fetch(
			`https://dataservice.accuweather.com/locations/v1/search?q=${city}&apikey=${this.api}`,
		)
			.then((response) => response.json())
			.then((data) => this.getWeather(data));
	},

	getWeather: function (data) {
		const cityKey = data[0].Key;
		const cityName = data[0].EnglishName;
		fetch(
			`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${this.api}&details=true`,
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
		currentCity.innerText = `${data[0].EnglishName}`;
	},

	displayWeather: function (data) {
		const newData = data[0];
		currentTemp.innerText = newData.Temperature.Imperial.Value + '°';
		weatherText.innerText = newData.WeatherText;
		feelsLike.innerText = newData.RealFeelTemperature.Imperial.Value + '°';
		wind.innerText = newData.WindGust.Speed.Imperial.Value + 'mi/h';
		uv.innerText = 'UV: ' + newData.UVIndex;
		humidity.innerText = newData.RelativeHumidity + '%';
	},
};

weatherToday.getCity('chicago');

// to do: hi/lo, weather icons; sunrise/set, change of rain
