let input = document.querySelector('#emailInput');
let btn = document.querySelector('.notifyMeBtn');

let emptyString = document.querySelector('.emptyString');
let invalidEmail = document.querySelector('.invalidEmail');

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

btn.addEventListener('click', handleClick);

function handleClick(e) {
    if(!emptyString.classList.contains('hidden')) {
        emptyString.classList.add('hidden');
    }
    if(!invalidEmail.classList.contains('hidden')) {
        invalidEmail.classList.add('hidden');
    }
    let text = input.value;
    if(text.length === 0) {
        emptyString.classList.remove('hidden');
    } else {
        if(!regex.test(text)) {
            invalidEmail.classList.remove('hidden');
        }
    }
}
