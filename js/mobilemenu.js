const mypopUp = document.querySelector('#popup');
const openBtn = document.querySelectorAll('.myButton');
const closeBtn = document.querySelector('#cancelBtn');
const about = document.querySelector('.about');
const overlay = document.querySelector('.overlay');
const exitOverlay = document.querySelector('.exitOverlay');
const hamburger = document.querySelector('.hamburger1');
const aboutmenu = document.querySelectorAll('.about-menu');

const mobileMenu = () => {
  overlay.style.width = '100%';
  about.style.display = 'block';
  document.body.style.position = 'fixed';
};

hamburger.addEventListener('click', mobileMenu);
const closeOverlay = () => {
  overlay.style.width = '0';
  about.style.display = 'none';
  document.body.style.position = 'absolute';
};

exitOverlay.addEventListener('click', closeOverlay);
aboutmenu.forEach(x => {
  x.addEventListener('click', closeOverlay);
});

//pop up code

const list = [
  {
    name: 'Tonic',
    technology: '<li>CANOPY</li><li>BACK END DEV</li><li>2015</li>',
    image: 'url(images/Snapshoot-Portfolio.png)',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    name: 'Multi-Post Stories',
    technology: '<li>CANOPY</li><li>BACK END DEV</li><li>2015</li>',
    image: 'url(images/Snapshoot-Portfolio2.png)',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    name: 'Tonic',
    technology: '<li>CANOPY</li><li>BACK END DEV</li><li>2015</li>',
    image: 'url(images/Snapshoot-Portfolio3.png)',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    name: 'Multi-Post Stories',
    technology: '<li>CANOPY</li><li>BACK END DEV</li><li>2015</li>',
    image: 'url(images/Snapshoot-Portfolio4.png)',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

function myInformation(i) {
  document.querySelector('.name').innerText = list[i].name;
  document.querySelector('.description').innerText = list[i].description;
  document.querySelector('.technology').innerHTML = list[i].technology;
  document.querySelector('#image').style.backgroundImage = list[i].image;
}

for (let i = 0; i < list.length; i += 1) {
  openBtn[i].addEventListener('click', () => {
    mypopUp.style.display = 'block';
    myInformation(i);
    document.body.style.overflow = 'hidden';
  });
}

closeBtn.addEventListener('click', () => {
  mypopUp.style.display = 'none';
  document.body.style.overflow = 'visible';
});

window.onclick = function(event) {
  if (event.target == mypopUp) {
    mypopUp.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
};
