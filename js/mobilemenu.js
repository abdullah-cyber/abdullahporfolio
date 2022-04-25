const mypopUp = document.getElementById('popup');
const openBtn = document.querySelectorAll('.myButton');
const closeBtn = document.getElementById('cancelBtn');
// const imgHeight = document.getElementById('image');

function mobileMenu() {
  if (document.getElementById('about').style.display == 'block') {
    document.getElementsById('about').style.display = 'none';
  } else {
    document.getElementById('about').style.display = 'block';
    document.getElementById('myOverlay').style.width = '100%';
    document.body.style.position = 'fixed';
  }
}
document.getElementById('hamburger').addEventListener('click', mobileMenu);
function closeOverlay() {
  document.getElementById('about').style.display = 'none';
  document.getElementById('myOverlay').style.width = '0';
  document.body.style.position = 'absolute';
}
document.getElementById('exitOverlay').addEventListener('click', closeOverlay);

//pop up code

const info = [
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
  document.querySelector('.name').innerText = info[i].name;
  document.querySelector('.description').innerText = info[i].description;
  document.querySelector('.technology').innerHTML = info[i].technology;
  document.querySelector('#image').style.backgroundImage = info[i].image;
}

for (let i = 0; i < info.length; i += 1) {
  openBtn[i].addEventListener('click', () => {
    mypopUp.style.display = 'block';
    myInformation(i);
    document.body.style.position = 'fixed';
  });
}

closeBtn.addEventListener('click', () => {
  mypopUp.style.display = 'none';
  document.body.style.position = 'relative';
});

window.onclick = function(event) {
  if (event.target == mypopUp) {
    mypopUp.style.display = 'none';
  }
};
