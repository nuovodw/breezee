const currentCity = document.querySelector('.city');
const currentTemp = document.querySelector('.temp');
const weatherText = document.querySelector('.weather-text');
const weatherIcon = document.querySelector('.weather-icon');
const feelsLike = document.querySelector('.feels-like');
const hi = document.querySelector('.hi');
const low = document.querySelector('.low');
const sunrise = document.querySelector('.sunrise-time');
const sunset = document.querySelector('.sunset-time');
const wind = document.querySelector('.wind-speed');
const rainChance = document.querySelector('.rain-chance');
const uv = document.querySelector('.uv');
const humidity = document.querySelector('.humidity');

const todaysDateDisplay = document.querySelector('.today-date-info');

// Hourly Forecast
const hourlyCurrentTemp = document.querySelector('.current-temp');
const currentWeatherIcon = document.querySelector('.current-weather-icon');
const currentTime = document.querySelector('.current-time');

const hourOneTemp = document.querySelector('.hour_one-temp');
const hourOneIcon = document.querySelector('.hour_one-icon');
const hourOneTime = document.querySelector('.hour_one-time');

const hourTwoTemp = document.querySelector('.hour_two-temp');
const hourTwoIcon = document.querySelector('.hour_two-icon');
const hourTwoTime = document.querySelector('.hour_two-time');

const hourThreeTemp = document.querySelector('.hour_three-temp');
const hourThreeIcon = document.querySelector('.hour_three-icon');
const hourThreeTime = document.querySelector('.hour_three-time');

const hourFourTemp = document.querySelector('.hour_four-temp');
const hourFourIcon = document.querySelector('.hour_four-icon');
const hourFourTime = document.querySelector('.hour_four-time');

const hourFiveTemp = document.querySelector('.hour_five-temp');
const hourFiveIcon = document.querySelector('.hour_five-icon');
const hourFiveTime = document.querySelector('.hour_five-time');

// search
const searchText = document.querySelector('#search-text');
const searchBox = document.querySelector('.search-bar button');

// Today's date
const today = new Date();
const day = today.getDay();
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const month = today.getMonth();
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
const date = today.getDate();

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
		// convert epoch to readable time
		const readableSunrise = new Date(
			data.current.sunrise * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		});
		const readableSunset = new Date(
			data.current.sunset * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		});

		currentTemp.innerText = Math.round(data.current.temp) + '°';
		weatherText.innerText = data.current.weather[0].main;
		hi.innerText = data.daily[0].temp.max + '°';
		low.innerText = data.daily[0].temp.min + '°';
		weatherIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
		feelsLike.innerText = data.current.feels_like + '°';
		sunrise.innerHTML = readableSunrise;
		sunset.innerHTML = readableSunset;

		wind.innerText = data.current.wind_speed + 'mi/h';

		uv.innerText = 'UV: ' + data.current.uvi;
		humidity.innerText = data.current.humidity + '%';
		todaysDateDisplay.innerText = `${days[day]}, ${months[month]} ${date}`;

		// Hourly Forecast
		hourlyCurrentTemp.innerText = Math.round(data.current.temp) + '°';
		currentWeatherIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;

		hourOneTemp.innerText = Math.round(data.hourly[1].temp) + '°';
		hourOneIcon.src = `https://openweathermap.org/img/wn/${data.hourly[1].weather[0].icon}.png`;
		hourOneTime.innerText = new Date(
			data.hourly[1].dt * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			hour12: true,
		});

		hourTwoTemp.innerText = Math.round(data.hourly[2].temp) + '°';
		hourTwoIcon.src = `https://openweathermap.org/img/wn/${data.hourly[2].weather[0].icon}.png`;
		hourTwoTime.innerText = new Date(
			data.hourly[2].dt * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			hour12: true,
		});

		hourThreeTemp.innerText = Math.round(data.hourly[3].temp) + '°';
		hourThreeIcon.src = `https://openweathermap.org/img/wn/${data.hourly[3].weather[0].icon}.png`;
		hourThreeTime.innerText = new Date(
			data.hourly[3].dt * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			hour12: true,
		});

		hourFourTemp.innerText = Math.round(data.hourly[4].temp) + '°';
		hourFourIcon.src = `https://openweathermap.org/img/wn/${data.hourly[4].weather[0].icon}.png`;
		hourFourTime.innerText = new Date(
			data.hourly[4].dt * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			hour12: true,
		});

		hourFiveTemp.innerText = Math.round(data.hourly[5].temp) + '°';
		hourFiveIcon.src = `https://openweathermap.org/img/wn/${data.hourly[5].weather[0].icon}.png`;
		hourFiveTime.innerText = new Date(
			data.hourly[5].dt * 1000,
		).toLocaleTimeString('en-US', {
			timeZone: `${data.timezone}`,
			hour: 'numeric',
			hour12: true,
		});
	},

	search: function () {
		this.getCity(searchText.value);
	},
};

searchBox.addEventListener('click', () => {
	weatherToday.search();
});

searchText.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		weatherToday.search();
	}
});

weatherToday.getCity('chicago');
