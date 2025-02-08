const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1040) {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }
});
