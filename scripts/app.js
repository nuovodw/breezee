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
		fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${this.api}&details=true`,
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		console.log(data[0].WeatherText);
		const { WeatherText } = data[0].WeatherText;
		console.log(WeatherText);
	},
};

weatherToday.getCity('Chicago');
