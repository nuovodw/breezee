'use strict';

let countryCodes = document.querySelector('.country-list');
let countries = ['US'];
let newCountries = [];

async function getCountryCode() {
	const response = await fetch('https://restcountries.eu/rest/v2/all');
	const data = await response.json();

	for (let i = 0; i < data.length; i++) {
		let codes = data[i].alpha2Code;
		countries.push(codes);
	}
	console.log(countries);
	countries = newCountries;
}

// 	for (let i = 0; i < data.length; i++) {
// 		document.querySelector('.country-list').innerHTML = `
// 		<select>
// 			<option>US</option>
// 			<option>${data[i].alpha2Code}</option>
// 		</select>`;
// 	}
// }

getCountryCode();

for (let i = 0; i < countries.length; i++) {
	let codes = countries[i];
	console.log(codes);
	// let countryList = document.createElement('option');
	// countryList.textContent = codes;
	// countryList.value = codes;
	// countryCodes.appenChild(countryList);
}
