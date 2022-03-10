const navbar = document.querySelector('.menu-nav');
const openbtn = document.querySelector('.menu');
const closebtn = document.querySelector('.menu-close');
const toggleBtn = document.querySelector('.button-menu');
const lists = document.querySelector('.nav-mobile');
const navMobileList = document.querySelectorAll('.nav-mobile-list');
function toggler() {
  closebtn.classList.toggle('close-menu-active');
  openbtn.classList.toggle('menu-close');
  navbar.classList.toggle('mobile-menu');
  lists.classList.toggle('nav-mobile-active');
}
toggleBtn.addEventListener('click', toggler);
navMobileList.forEach((elem) => {
  elem.addEventListener('click', toggler);
});

const projects = [
  {
    id: 1,
    name: 'Pharm Aliya Buhari',
    title: 'Digital health entuthiast and program manager, DOGO, charity',
    description: 'Health data security and ways to improve data in health facilities',
    featured_image: 'images/Untitled design.png',
  },
  {
    id: 2,
    name: 'Dr Ope Lukan',
    title: 'Internal Medicine Resident at Advocate Illinois Masonic Medical center',
    description: 'Digital health technology and impact in COVID-19 pandemic',
    featured_image: 'images/opee.png',
  },
  {
    id: 'desk-image-3',
    name: 'Ada Duke',
    title: 'Community health facilitator',
    description: 'Health data security and ways to improve data in health facilities',
    featured_image: 'images/Untitled design(2).png',
  },
  {
    id: 'desk-image-4',
    name: 'Alice Duke',
    title: 'Health advocate',
    description: 'Digital health technology and impact in COVID-19 pandemic',
    featured_image: 'images/Untitled design(1).png',
  },
  {
    id: 'desk-image-5',
    name: 'James Alan',
    title: 'Health professor',
    description: 'Health data security and ways to improve data in health facilities',
    featured_image: 'images/Untitled design(3).png',
  },
  {
    id: 'desk-image-6',
    name: 'Rothbrok abass',
    title: 'Health personnel',
    description: 'Digital health technology and impact in COVID-19 pandemic',
    featured_image: 'images/Untitled design(4).png',
  },
];

window.onload = () => {
  const newContainer = document.getElementById('speak');
  projects.forEach((project) => {
    const cardsHTML = ` <div class="speaker-card" id="${project.id}">
      <img class="speaker-image" src="${project.featured_image}" alt="Speakers" />
      <div class="speaker-description">
      <h5>${project.name}</h5>
      <i class="profession">
       ${project.title}
      </i>
      <div class="guidebar-speaker"></div>
          <p class="speaker-topic">
             ${project.description}
          </p>
      </div>
  </div>
        `;
    newContainer.insertAdjacentHTML('beforeend', cardsHTML);
  });
};