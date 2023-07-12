let dayInput = document.querySelector('#day');
let monthInput = document.querySelector('#month');
let yearInput = document.querySelector('#year');

let daysRes = document.querySelector('.daysResult');
let monthsRes = document.querySelector('.monthsResult');
let yearsRes = document.querySelector('.yearsResult');

let submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', handleAgeForm)

function handleAgeForm() {
	let date = validateDate();
	
	if(!isNaN(date)) {
		console.log(new Date(date))
	}
}

function validateDate() {
	let day = dayInput.value;
	let month = monthInput.value;
	let year = yearInput.value;

	let dateString = year+ '-' +month+ '-' +day;

	return Date.parse(dateString);
}