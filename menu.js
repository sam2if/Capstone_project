const menu = document.querySelector('.navformob');
const close = document.querySelector('.menu-close');
const body = document.querySelector('section');
const featured = document.querySelector('.featured-speakers');
const main = document.querySelector('.main-program');

const hamburger = document.querySelector('.hamburger');

menu.setAttribute('id', 'menubar');

function show() {
  menu.style.filter = 'none';
  menu.removeAttribute('id');
  body.style.filter = 'blur(8px)';
  featured.style.filter = 'blur(8px)';
  main.style.filter = 'blur(8px)';
}

function hide() {
  menu.setAttribute('id', 'menubar');
  body.style.filter = 'none';
  featured.style.filter = 'none';
  main.style.filter = 'none';
}

hamburger.addEventListener('click', show);
close.addEventListener('click', hide);
