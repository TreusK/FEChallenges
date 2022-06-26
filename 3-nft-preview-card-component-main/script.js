let mainImageContainer = document.querySelector('.mainImageContainer');
let overlay = document.querySelector('.overlay');

mainImageContainer.addEventListener('mouseenter', function(e) {
    overlay.classList.remove('hidden');
})
mainImageContainer.addEventListener('mouseleave', function(e) {
    overlay.classList.add('hidden');
})