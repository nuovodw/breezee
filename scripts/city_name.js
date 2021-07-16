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

	const select = document.getElementById('select-country');
	const input = document.querySelector('input');
	newCountries = countries.sort();
	console.log(newCountries);

	for (let i = 0; i < newCountries.length; i++) {
		let countryCode = newCountries[i];
		const displayCountryCodes = document.createElement('option');
		const setInputValue = document.createElement('input');
		displayCountryCodes.textContent = countryCode;
		setInputValue.setAttribute('value', `,`);
		select.appendChild(displayCountryCodes);

		// let parent = document.querySelector('.search-bar');
		// parent.appendChild(setInputValue);

		// const newValue = document.createElement('input');
		// newValue.value = ' ,' + countryCode;
		// input.appendChild(newValue);
	}
}

getCountryCode();
