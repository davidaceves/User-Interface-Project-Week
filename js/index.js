// JS goes here

let hamburger = document.querySelector('.hamburger');
let hamburgerClose = document.querySelector('.close-hamburger');
let navBar = document.querySelector('.nav-bar');
let navA = document.querySelector('.nav-bar a')
let logo = document.querySelector('.logo');




hamburger.addEventListener('click', () => {
    if (!navBar.classList.contains('nav-toggle')) {
        navBar.classList.add('nav-toggle');
        hamburger.style.display = 'none';
        hamburgerClose.style.display = 'unset';
    } else {
        navBar.classList.remove('nav-toggle');
        hamburger.style.display = 'unset';
        hamburgerClose.style.display = 'none';
    }
});

hamburgerClose.addEventListener('click', () => {
    if (!navBar.classList.contains('nav-toggle')) {
        navBar.classList.add('nav-toggle');
        hamburger.style.display = 'none';
        hamburgerClose.style.display = 'unset';
    } else {
        navBar.classList.remove('nav-toggle');
        hamburger.style.display = 'unset';
        hamburgerClose.style.display = 'none';
    }
});