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
const typingEffect = new Typed('.typedText', {
  strings: ['Full Stack Web Developer', 'Mobile Developer', 'Windows Desktop Developer', 'Software Engineer', 'Mentor'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// accordion effect
const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
  const header = item.querySelector('p');
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    const description = item.querySelector('.description');
    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector('i').classList.replace('fa-angle-right', 'fa-angle-down');
    } else {
      description.style.height = '0px';
      item.querySelector('i').classList.replace('fa-angle-down', 'fa-angle-right');
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');

      const des = item2.querySelector('.description');
      des.style.height = '0px';
      item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    }
  });
}