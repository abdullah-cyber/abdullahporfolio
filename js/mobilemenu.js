const mypopUp = document.querySelector('#popup');
const openBtn = document.querySelectorAll('.myButton');
const closeBtn = document.querySelector('#cancelBtn');
const about = document.querySelector('.about');
const overlay = document.querySelector('.overlay');
const exitOverlay = document.querySelector('.exitOverlay');
const hamburger = document.querySelector('.hamburger1');
const aboutmenu = document.querySelectorAll('.about-menu');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#formSubmit');
const fullname = document.querySelector('#fullname');
const myEmail = document.querySelector('#email');
const textarea = document.querySelector('#textarea');
const icon = document.querySelectorAll('.myicon');
const errorMessage = document.querySelectorAll('.error-text');

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

//validation
submitBtn.disabled = true;

const fullnameChecker = () => {
  icon[0].style.display = 'inline-block';

  if (fullname.value === '') {
    icon[0].style.display = 'none';
    fullname.style.borderColor = '#ffffff';
    errorMessage[0].style.display = 'none';
    submitBtn.disabled = true;
  } else if (fullname.value.length < 3) {
    icon[0].innerHTML = '<i class="fa fa-exclamation-circle"></i>';
    icon[0].style.color = '#e74c3c';
    errorMessage[0].style.display = 'block';
    fullname.style.borderColor = '#e74c3c';
    submitBtn.disabled = true;
  } else {
    icon[0].innerHTML = '<i class="fas fa-check-circle"></i>';
    icon[0].style.color = 'green';
    fullname.style.borderColor = 'green';
    errorMessage[0].style.display = 'none';
  }
};

const emailChecker = () => {
  icon[1].style.display = 'inline-block';
  let emailRegX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (myEmail.value === '') {
    icon[1].style.display = 'none';
    myEmail.style.borderColor = '#ffffff';
    errorMessage[1].style.display = 'none';
    submitBtn.disabled = true;
  } else if (!myEmail.value.match(emailRegX)) {
    icon[1].innerHTML = '<i class="fa fa-exclamation-circle"></i>';
    icon[1].style.color = '#e74c3c';
    errorMessage[1].style.display = 'block';
    myEmail.style.borderColor = '#e74c3c';
    submitBtn.disabled = true;
  } else {
    icon[1].innerHTML = '<i class="fas fa-check-circle"></i>';
    icon[1].style.color = 'green';
    myEmail.style.borderColor = 'green';
    errorMessage[1].style.display = 'none';
  }
};

const textareaChecker = () => {
  icon[2].style.display = 'inline-block';
  if (textarea.value === '') {
    icon[2].style.display = 'none';
    textarea.style.borderColor = '#ffffff';
    errorMessage[2].style.display = 'none';
    submitBtn.disabled = true;
  } else if (textarea.value.length < 15) {
    icon[2].innerHTML = '<i class="fa fa-exclamation-circle"></i>';
    icon[2].style.color = '#e74c3c';
    errorMessage[2].style.display = 'block';
    textarea.style.borderColor = '#e74c3c';
    submitBtn.disabled = true;
  } else {
    icon[2].innerHTML = '<i class="fas fa-check-circle"></i>';
    icon[2].style.color = 'green';
    textarea.style.borderColor = 'green';
    errorMessage[2].style.display = 'none';
    submitBtn.disabled = false;
  }
};

fullname.addEventListener('input', fullnameChecker);
myEmail.addEventListener('input', emailChecker);
textarea.addEventListener('input', textareaChecker);
