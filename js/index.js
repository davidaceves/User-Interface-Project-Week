// JS goes here

let hamburger = document.querySelector('.hamburger');
let hamburgerClose = document.querySelector('.close-hamburger');
let navBar = document.querySelector('.nav-bar');
let navA = document.querySelector('.nav-bar a')
let logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    hamburgerClose.style.display = 'unset';

    navBar.style.height = '100%';
    navBar.style.width = '1000px';
    navBar.style.opacity = '.5';
    navBar.style.opacity = '.75';
    navBar.style.position = 'fixed';
    navBar.style.zIndex = '1';
    navBar.style.alignItems = 'flex-start';
    navBar.style.paddingTop = '1%';
});