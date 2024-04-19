const navLink = document.getElementById('navLink');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
function showMenu() {
  navLink.style.right = '0';
}
function hideMenu() {
  navLink.style.right = '-770px';
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

// typing effect
const typingEffect = new Typed(".typedText", {
  strings: ["Full Stack Web Developer", "Mobile Developer", "Windows Desktop Developer", "Software Engineer", "Mentor"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})