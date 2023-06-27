let formButton = document.querySelector('.formButton');
let formContainer = document.querySelector('.formContainer');
let successContainer = document.querySelector('.successContainer');

formButton.addEventListener('click', handleFormBtnClick);

function handleFormBtnClick(e) {
	formContainer.classList.toggle('hidden');
	successContainer.classList.toggle('hidden');
}