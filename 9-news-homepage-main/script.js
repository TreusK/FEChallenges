let hamburger = document.querySelector('.hamburger');
let cross = document.querySelector('.cross');
let mlc = document.querySelector('.mobileLinksContainer');


hamburger.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);

//To force close the menu on resize
window.addEventListener('resize', hideMenu);

function showMenu() {
   mlc.classList.remove('hidden');
   mlc.classList.add('unhidden');
   document.documentElement.style.overflow = 'hidden';
   document.body.scroll = "no";
}

function hideMenu() {
   mlc.classList.remove('unhidden');
   mlc.classList.add('hidden')
   document.documentElement.style.overflow = 'scroll';
   document.body.scroll = "yes";
}


