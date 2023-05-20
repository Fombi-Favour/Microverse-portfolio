const navLink = document.getElementById('navLink');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
function showMenu() {
  navLink.style.right = '0';
}
function hideMenu() {
  navLink.style.right = '-768px';
}

menu.addEventListener('click', () => {
  showMenu();
});
close.addEventListener('click', () => {
  hideMenu();
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});
