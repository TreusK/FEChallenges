let formButton = document.querySelector('.formButton');
let formContainer = document.querySelector('.formContainer');
let successContainer = document.querySelector('.successContainer');
let form = document.querySelector('form');
let emailInput = document.querySelector('input');


//events
formButton.addEventListener('click', handleFormBtnClick);

emailInput.addEventListener('focus', function() {
	emailInput.classList.remove('invalid')
})

form.addEventListener('submit', function(e) {
	e.preventDefault();
})


function handleFormBtnClick(e) {
	if(emailInput.checkValidity()) {
		formContainer.classList.add('hidden');
		formContainer.classList.remove('flex');
		successContainer.classList.add('flex');
		successContainer.classList.remove('hidden');
	} else {
		emailInput.classList.add('invalid')
	}
	
}