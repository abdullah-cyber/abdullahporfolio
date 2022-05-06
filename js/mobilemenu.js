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
