var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('bg-secondary', 'shadow');
  } else {
    nav.classList.remove('bg-secondary', 'shadow');
  }
});
