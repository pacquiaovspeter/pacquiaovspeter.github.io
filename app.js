const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const body = document.querySelector('.maincontent')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

body.addEventListener('click', function() {
    const audio = new Audio("images/clock3.mp3");
    audio.loop = true;
    audio.play();
})
