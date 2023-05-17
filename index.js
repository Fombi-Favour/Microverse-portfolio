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
