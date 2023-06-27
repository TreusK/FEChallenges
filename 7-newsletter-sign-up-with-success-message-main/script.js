let formButton = document.querySelector('.formButton');
let formContainer = document.querySelector('.formContainer');
let successContainer = document.querySelector('.successContainer');

formButton.addEventListener('click', handleFormBtnClick);

function handleFormBtnClick(e) {
	formContainer.classList.add('hidden');
	formContainer.classList.remove('flex');
	successContainer.classList.add('flex');
	successContainer.classList.remove('hidden');
}