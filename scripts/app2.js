const currentCity = document.querySelector('.city');
const currentTemp = document.querySelector('.temp');
const weatherText = document.querySelector('.weather-text');
const hi = document.querySelector('.hi');
const low = document.querySelector('.low');
const wind = document.querySelector('.wind-speed');
const rainChance = document.querySelector('.rain-chance');
const uv = document.querySelector('.uv');
const humidity = document.querySelector('.humidity');

const feelsLike = document.querySelector('.feels-like');

let weatherToday = {
	api: 'b7c08248e1395dc2a596374c47216ae9',

	getCity: function (city) {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.api}`,
		)
			.then((response) => response.json())
			.then((data) => this.getWeatherInfo(data));
	},
	getWeatherInfo: function (data) {
		const lon = data.coord.lon;
		const lat = data.coord.lat;
		currentCity.innerText = data.name;
		fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${this.api}`,
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		currentTemp.innerText = data.current.temp + '°';
		weatherText.innerText = data.current.weather[0].main;
		hi.innerText = data.daily[0].temp.max + '°';
		low.innerText = data.daily[0].temp.min + '°';
		feelsLike.innerText = data.current.feels_like + '°';
		wind.innerText = data.current.wind_speed + 'mi/h';

		uv.innerText = 'UV: ' + data.current.uvi;
		humidity.innerText = data.current.humidity + '%';
	},
};

weatherToday.getCity('chicago');
