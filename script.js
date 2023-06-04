const hamburger = document.querySelector('.hamburger');
const sidebarNav = document.querySelector('.sidebar-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidebarNav.classList.toggle('open');
});