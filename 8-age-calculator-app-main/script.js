let dayInput = document.querySelector('#day');
let monthInput = document.querySelector('#month');
let yearInput = document.querySelector('#year');

let daysRes = document.querySelector('.daysResult');
let monthsRes = document.querySelector('.monthsResult');
let yearsRes = document.querySelector('.yearsResult');

let submitBtn = document.querySelector('.submitBtn')

submitBtn.addEventListener('click', handleAgeForm)

const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validateDate(dateString) {
	let res = Date.parse(dateString);
	return (!isNaN(res));
}

function handleAgeForm() {
	let d1 = dayInput.value;
	let m1 = monthInput.value;
	let y1 = yearInput.value;
	let dateString = y1+ '-' +m1+ '-' +d1;

	console.log(dateString)

	//if the date isn't valid, stop
	if(!validateDate(dateString)) {
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

  
