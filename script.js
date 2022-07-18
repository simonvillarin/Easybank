const openNav = document.querySelector('#menu');
const closeNav = document.querySelector('#close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

openNav.addEventListener('click', () => {
  nav.classList.add('open');
  closeNav.style.display = 'block';
  openNav.style.display = 'none';
  overlay.style.display = 'block';
});

closeNav.addEventListener('click', () => {
  nav.classList.remove('open');
  closeNav.style.display = 'none';
  openNav.style.display = 'block';
  overlay.style.display = 'none';
});
