const projects = document.querySelector('.projects');
const blur = document.getElementById('blur');
const popup = document.getElementById('pop');
const Title = document.querySelector('.title');
const Author = document.querySelector('.author');
const dot = document.getElementsByClassName('dot');
// const [spec1] = document.querySelector('.spec1');
// const [spec2] = document.querySelector('.spec2');
const pic = document.querySelector('.project-image');
const desc = document.querySelector('.description');
const tag = document.querySelector('.tag');
const Live = document.querySelector('.live');
const Source = document.querySelector('.source');
const details = [
  {
    id: 0,
    title: 'Tonic',
    image: './assets/project1.svg',
    author: 'CANOPY',
    spec: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://fombi-favour.github.io/Microverse-portfolio/',
    source: 'https://github.com/Fombi-Favour/Microverse-portfolio',
  },
  {
    id: 1,
    title: 'Uber Navigation',
    image: './assets/project2.svg',
    author: 'Uber',
    spec: ['Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: 'https://fombi-favour.github.io/Microverse-portfolio/',
    source: 'https://github.com/Fombi-Favour/Microverse-portfolio',
  },
  {
    id: 2,
    title: 'Facebook 360',
    image: './assets/project3.svg',
    author: 'FACEBOOK',
    spec: ['Full Stack Dev', '2015'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: 'https://fombi-favour.github.io/Microverse-portfolio/',
    source: 'https://github.com/Fombi-Favour/Microverse-portfolio',
  },
  {
    id: 3,
    title: 'Multi-Post Stories',
    image: './assets/project4.svg',
    author: 'FACEBOOK',
    spec: ['Full Stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    live: 'https://fombi-favour.github.io/Microverse-portfolio/',
    source: 'https://github.com/Fombi-Favour/Microverse-portfolio',
  },
];

details.forEach((detail) => {
  projects.innerHTML += `
    <main class="project-row" id='${detail.id}'>
        <div class="left">
          <img src="${detail.image}" alt="project-1" />
        </div>
        <div class="right">
          <h1>${detail.title}</h1>
          <div class="content">
            <h3 class="author">${detail.author}</h3>
            <img src="./assets/Counter.svg" alt="dot" />
            <h3>${detail.spec[0]}</h3>
            <img src="./assets/Counter.svg" alt="dot" />
            <h3>${detail.spec[1]}</h3>
          </div>
          <p>
            ${detail.description}
          </p>
          <ul class="tag">
            ${detail.technologies.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
          <button type="button" id="${detail.id}" class="btn-see-detail">See project</button>
        </div>
      </main>
    `;
});

function showDetails(Id) {
  Title.textContent = details[Id].title;
  Author.textContent = details[Id].author;
  // spec1.innerHTML = details[Id].spec;
  // spec2.innerHTML = details[Id].spec;
  pic.src = details[Id].image;
  desc.textContent = details[Id].description;
  tag.innerHTML = details[Id].technologies.map((tags) => `<li>${tags}</li>`).join('');
  Live.href = details[Id].live;
  Source.href = details[Id].source;
  blur.classList.toggle('active');
  popup.classList.toggle('active');
}

const seeProject = document.querySelectorAll('.btn-see-detail');
seeProject.forEach((button) => button.addEventListener('click', () => {
  showDetails(Number(button.id));
}));

const Close = document.querySelector('.close');
Close.addEventListener('click', () => {
  blur.classList.toggle('active');
  popup.classList.toggle('active');
});

Live.addEventListener('click', () => {
  window.open(details.live);
});

Source.addEventListener('click', () => {
  window.open(details.source);
});
