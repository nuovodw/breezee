'use strict';

let countries = ['US'];
let newCountries = [];

async function getCountryCode() {
	const response = await fetch('https://restcountries.eu/rest/v2/all');
	const data = await response.json();

	for (let i = 0; i < data.length; i++) {
		let codes = data[i].alpha2Code;
		countries.push(codes);
	}

	const select = document.getElementById('selectCountry');
	newCountries = countries.sort();
	console.log(newCountries);

	for (let i = 0; i < newCountries.length; i++) {
		let countryCode = newCountries[i];
		const displayCountryCodes = document.createElement('option');
		displayCountryCodes.textContent = countryCode;
		// displayCountryCodes.value = countryCode;
		select.appendChild(displayCountryCodes);
	}
}

getCountryCode();
