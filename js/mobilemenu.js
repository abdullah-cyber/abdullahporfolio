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
const errorMessage1 = document.querySelectorAll('.error1-text');

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
aboutmenu.forEach(oval => {
  oval.addEventListener('click', closeOverlay);
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

const closePopup = () => {
  mypopUp.style.display = 'none';
  document.body.style.overflow = 'visible';
};

closeBtn.addEventListener('click', closePopup);

window.onclick = function(event) {
  if (event.target == mypopUp) {
    mypopUp.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
};

//validation

const clear1 = () => {
  icon[0].style.display = 'none';
  fullname.style.borderColor = '#ffffff';
  errorMessage[0].style.display = 'none';
  errorMessage1[0].style.display = 'none';
};

const clear2 = () => {
  icon[1].style.display = 'none';
  myEmail.style.borderColor = '#ffffff';
  errorMessage[1].style.display = 'none';
  errorMessage1[1].style.display = 'none';
};

const clear3 = () => {
  icon[2].style.display = 'none';
  textarea.style.borderColor = '#ffffff';
  errorMessage[2].style.display = 'none';
  errorMessage1[2].style.display = 'none';
};

const error1 = () => {
  icon[0].innerHTML = '<i class="fa fa-exclamation-circle"></i>';
  icon[0].style.color = '#e74c3c';
  errorMessage[0].style.display = 'block';
  errorMessage1[0].style.display = 'none';
  fullname.style.borderColor = '#e74c3c';
};

const error2 = () => {
  icon[1].innerHTML = '<i class="fa fa-exclamation-circle"></i>';
  icon[1].style.color = '#e74c3c';
  errorMessage[1].style.display = 'block';
  errorMessage1[1].style.display = 'none';
  myEmail.style.borderColor = '#e74c3c';
};

const error3 = () => {
  icon[2].innerHTML = '<i class="fa fa-exclamation-circle"></i>';
  icon[2].style.color = '#e74c3c';
  errorMessage[2].style.display = 'block';
  errorMessage1[2].style.display = 'none';
  textarea.style.borderColor = '#e74c3c';
};

const success1 = () => {
  icon[0].innerHTML = '<i class="fas fa-check-circle"></i>';
  icon[0].style.color = 'green';
  fullname.style.borderColor = 'green';
  errorMessage[0].style.display = 'none';
};

const success2 = () => {
  icon[1].innerHTML = '<i class="fas fa-check-circle"></i>';
  icon[1].style.color = 'green';
  myEmail.style.borderColor = 'green';
  errorMessage[1].style.display = 'none';
};

const success3 = () => {
  icon[2].innerHTML = '<i class="fas fa-check-circle"></i>';
  icon[2].style.color = 'green';
  textarea.style.borderColor = 'green';
  errorMessage[2].style.display = 'none';
};

const fullnameChecker = () => {
  icon[0].style.display = 'inline-block';

  if (fullname.value === '') {
    clear1();
  } else if (fullname.value.length < 3) {
    error1();
  } else {
    success1();
  }
};
const emailChecker = () => {
  icon[1].style.display = 'inline-block';
  const emailRegX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (myEmail.value === '') {
    clear2();
  } else if (!myEmail.value.match(emailRegX)) {
    error2();
  } else {
    success2();
  }
};

const textareaChecker = () => {
  icon[2].style.display = 'inline-block';
  if (textarea.value === '') {
    clear3();
  } else if (textarea.value.length < 15) {
    error3();
  } else {
    success3();
    submitBtn.disabled = false;
  }
};

const buttonValidation = () => {
  if (fullname.value == '' && myEmail.value == '' && textarea.value == '') {
    errorMessage1[0].style.display = 'block';
    errorMessage1[1].style.display = 'block';
    errorMessage1[2].style.display = 'block';
    return false;
  } else if (fullname.value == '') {
    errorMessage1[0].style.display = 'block';
    return false;
  } else if (fullname.value.length < 3) {
    return false;
  } else if (myEmail.value == '') {
    errorMessage1[1].style.display = 'block';
    return false;
  } else if (textarea.value == '') {
    errorMessage1[2].style.display = 'block';
    return false;
  } else if (textarea.value.length < 15) {
    return false;
  } else {
    return true;
  }
};

fullname.addEventListener('input', fullnameChecker);
myEmail.addEventListener('input', emailChecker);
textarea.addEventListener('input', textareaChecker);
