
const menuButtonOpen = document.querySelector('.menu-button');
const menuButtonClose = document.querySelector('.menu-close-button');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');


menuButtonOpen.addEventListener('click', () => {
    mobileNavMenu.setAttribute('data-visible', 'true');
})

menuButtonClose.addEventListener('click', () => {
    mobileNavMenu.setAttribute('data-visible', 'false');
})
