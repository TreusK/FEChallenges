//dom grabbin
let dayInput = document.querySelector('#day');
let monthInput = document.querySelector('#month');
let yearInput = document.querySelector('#year');

let label = document.querySelectorAll('.label');

let daysRes = document.querySelector('.daysResult');
let monthsRes = document.querySelector('.monthsResult');
let yearsRes = document.querySelector('.yearsResult');

let errorDay = document.querySelector('.errorDay');
let errorMonth = document.querySelector('.errorMonth');
let errorYear = document.querySelector('.errorYear');

let submitBtn = document.querySelector('.submitBtn')


//const
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


//events
submitBtn.addEventListener('click', handleAgeForm);


//event functions
function validateDate(d, m, y) {
	let valid = true;
	let dateString = y+ '-' +m+ '-' +d;

	if(d == ''|| m == ''|| y == '') {
		valid = false;
	}

	let res = Date.parse(dateString);
	if(isNaN(res)) {
		valid = false;
		errorDay.innerText = 'Invalid date'
	}

	if(d > 31 || d < 1) {
		errorDay.innerText = "Must be a valid day";
		valid = false;
	}

	if(m > 12 || m < 1) {
		errorMonth.innerText = "Must be a valid month";
		valid = false;
	}

	let today = new Date();
	let yearNow = today.getFullYear();
	if(y > yearNow || y < 1000) {
		errorYear.innerText = "Must be a valid year";
		valid = false;
	}

	if(valid == false) {
		label.forEach(elem => elem.classList.add('errorColor'))
	}

	return valid;
}

function handleAgeForm() {

	clearError();

	let d1 = dayInput.value;
	let m1 = monthInput.value;
	let y1 = yearInput.value;

	//if the date isn't valid, stop
	if(!validateDate(d1, m1, y1)) {
		console.log('bzzt not valid')
		return
	}

	let today = new Date();
  let d2 = today.getDate();
  let m2 = 1 + today.getMonth();
  let y2 = today.getFullYear();
  
  if(d1 > d2){
  	d2 = d2 + month[m2 - 1];
  	m2 = m2 - 1;
  }
  if(m1 > m2){
  	m2 = m2 + 12;
  	y2 = y2 - 1;
  }

  daysRes.innerText = d2 - d1;
  monthsRes.innerText = m2 - m1;
  yearsRes.innerText = y2 - y1;
}


function clearError(e) {
	errorDay.innerText = "\u00a0";
	errorMonth.innerText = "\u00a0";
	errorYear.innerText = "\u00a0";
	daysRes.innerText = "--";
  monthsRes.innerText = "--";
  yearsRes.innerText = "--";
	label.forEach(elem => elem.classList.remove('errorColor'))
}
  
