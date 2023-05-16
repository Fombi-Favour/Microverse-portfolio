const navLink = document.getElementById('navLink');
function showMenu() {
  navLink.style.right = '0';
}
function hideMenu() {
  navLink.style.right = '-768px';
}

export default { showMenu, hideMenu };