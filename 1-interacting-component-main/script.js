let circles = document.getElementsByClassName('circle');
let submit = document.querySelector('.btn');
let ratingContainer = document.querySelector('.ratingComponentContainer');
let thankYouContainer = document.querySelector('.thankYouContainer');
let ratingNumber = document.querySelector('.ratingNumber');
let selected = -1;

function selectOne(index) {
    for(let i=0; i<5; i++) {
        circles[i].classList.remove('selected');
    }
    circles[index].classList.add('selected');
}

for(let i=0; i<circles.length; i++) {
    circles[i].addEventListener('click', function(e) {
        let index = (+e.target.classList[1])-1;
        selectOne(index)
        selected = index+1;
    })
}

submit.addEventListener('click', function(e) {
    if(selected === -1) {
        alert('Please choose a number');
    } else {
        ratingContainer.classList.add('hidden');
        thankYouContainer.classList.remove('hidden');
        ratingNumber.textContent = selected;
    }
})