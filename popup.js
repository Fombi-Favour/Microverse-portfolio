const projects = document.querySelector('.projects');
const blur = document.getElementById('blur');
const popup = document.getElementById('pop');
const Name = document.querySelector('.title');
const Author = document.querySelector('.author');
const spec1 = document.querySelector('.spec1');
const spec2 = document.querySelector('.spec2');
const pic = document.querySelector('.project-image');
const desc = document.querySelector('.pop-desc');
const tag = document.querySelector('.tag');
const Live = document.querySelector('.live');
const Source = document.querySelector('.source');
const details = [
  {
    id: 0,
    name: 'To-Do-List',
    image: './assets/todo.png',
    author: 'FAVOUR',
    spec: 'Frontend Dev',
    Year: '2023',
    description:
      '"To Do List" project is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://fombi-favour.github.io/To-Do-list/dist/',
    source: 'https://github.com/Fombi-Favour/To-Do-list',
  },
  {
    id: 1,
    name: 'Leaderboard',
    image: './assets/leaderboard.png',
    author: 'FAVOUR',
    spec: 'Frontend Dev',
    Year: '2023',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://fombi-favour.github.io/Leaderboard-api/dist/',
    source: 'https://github.com/Fombi-Favour/Leaderboard-api',
  },
  {
    id: 2,
    name: 'PennyWise',
    image: './assets/penywise.png',
    author: 'FAVOUR',
    spec: 'Backend Dev',
    Year: '2024',
    description:
      'PennyWise Budget App is a a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'PostgreSQL'],
    live: 'https://pennywise-tmwb.onrender.com',
    source: 'https://github.com/Fombi-Favour/budget-app-rb',
  },
  {
    id: 3,
    name: 'Book my Doctor',
    image: './assets/bookdoc.png',
    author: 'FAVOUR and al',
    spec: 'Full Stack Dev',
    Year: '2024',
    description:
      'Book my doctor is a full stack web application designed for users to view, manage and also appoint a doctor.',
    technologies: ['ReactJS', 'Ruby on Rails', 'TailwindCSS', 'PostgreSQL', 'JWT'],
    live: 'https://book-my-doctor-ui-wngd.onrender.com',
    source: 'https://github.com/yusufyusie/Book-my-Doctor-UI',
  },
  {
    id: 4,
    name: 'PokémonAPI (PokéApi)',
    image: './assets/pokemon.png',
    author: 'FAVOUR and al',
    spec: 'Frontend Dev',
    Year: '2023',
    description:
      'PokéApi is a project where we utilize our HTML, CSS, and JavaScript skills to create a platform that interacts with the pokemon API. It enables users to fetch pokemons, view abilities and habitats, post comments, and express their likes. Furthermore, the platform allows users to update the base API with their comments and likes, providing an interactive and engaging experience for pokemon enthusiasts.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest'],
    live: 'https://pokeapi-02.netlify.app/',
    source: 'https://github.com/Fombi-Favour/microverse-capstone-2',
  },
  {
    id: 5,
    name: 'Game Market',
    image: './assets/gamestore.png',
    author: 'FAVOUR.',
    spec: 'Frontend Dev',
    Year: '2023',
    description:
      'Game Market project is a responsive e-commerce website that displays information of games of different categories. All of these information is fetch from the API',
    technologies: ['ReactJS', 'TailwindCSS', 'API Fetching', 'Jest'],
    live: 'https://game-mar23.netlify.app/',
    source: 'https://github.com/Fombi-Favour/game-store',
  },
  {
    id: 6,
    name: 'Space Travelers\'',
    image: './assets/spacetraveler.png',
    author: 'FAVOUR and al',
    spec: 'Frontend Dev',
    Year: '2023',
    description:
      'Space Traveler\'s Hub is web-app to book a virtual rocket and join mission this web using Space X Api for the data',
    technologies: ['ReactJS', 'TailwindCSS', 'API Fetching', 'Jest'],
    live: 'https://traveler-hub.netlify.app/',
    source: 'https://github.com/Fombi-Favour/space-traveler-capstone',
  },
  {
    id: 7,
    name: 'GDC 2022',
    image: './assets/gdc.png',
    author: 'FAVOUR',
    spec: 'Frontend Dev',
    Year: '2023',
    description:
      'GDC Showcase 2022 is a responsive Game Developers Conference project with version control system like git, and frontend languages like HTML, CSS and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://gdc2022.netlify.app/',
    source: 'https://github.com/Fombi-Favour/GDC-site',
  },
];

details.forEach((detail) => {
  projects.innerHTML += `
    <main class="project-row" id='${detail.id}'>
        <div class="left">
          <img src="${detail.image}" alt="project-1" />
        </div>
        <div class="right">
          <h1>${detail.name}</h1>
          <div class="content">
            <h5 class="author">${detail.author}</h5>
            <img src="./assets/Counter.svg" alt="dot" />
            <h5>${detail.spec}</h5>
            <img src="./assets/Counter.svg" alt="dot" />
            <h5>${detail.Year}</h5>
          </div>
          <div class="desc">
            <p>
              ${detail.description}
            </p>
          </div>
          <ul class="tag">
            ${detail.technologies.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
          <button type="button" id="${detail.id}" class="btn-see-detail">See project</button>
        </div>
      </main>
    `;
});

function showDetails(Id) {
  Name.textContent = details[Id].name;
  Author.textContent = details[Id].author;
  spec1.innerHTML = details[Id].spec;
  spec2.innerHTML = details[Id].Year;
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

// Live.addEventListener('click', () => {
//   window.open(details.live);
// });

// Source.addEventListener('click', () => {
//   window.open(details.source);
// });
