let btn = document.querySelector('.newAdviceBtn');
let adviceId = document.querySelector('.adviceId');
let adviceText = document.querySelector('.adviceText');

btn.addEventListener('click', fetchAdvice);

function fetchAdvice() {
	fetch('https://api.adviceslip.com/advice?t=' + Math.random())
		.then(res => res.json())
		.then(data => buildAdvice(data.slip));
}

function buildAdvice(adviceObj) {
	adviceId.innerText = "ADVICE #" + adviceObj.id;
	adviceText.innerText = '"' + adviceObj.advice + '"';
}