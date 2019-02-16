// JS goes here

let hamburger = document.querySelector('.hamburger');
let hamburgerClose = document.querySelector('.close-hamburger');
let navBar = document.querySelector('.nav-bar');
let navA = document.querySelector('.nav-bar a');
let navCon = document.querySelector('.nav-container');
let logo = document.querySelector('.logo');




hamburger.addEventListener('click', () => {
    if (!navBar.classList.contains('nav-toggle')) {
        navBar.classList.add('nav-toggle');
        navCon.style.display = 'unset';
        hamburger.style.display = 'none';
        hamburgerClose.style.display = 'unset';
    } 
});

hamburgerClose.addEventListener('click', () => {
    if (navBar.classList.contains('nav-toggle')) {
        navBar.classList.remove('nav-toggle');
        navCon.style.display = 'none';
        hamburger.style.display = 'unset';
        hamburgerClose.style.display = 'none';
    } 
});
