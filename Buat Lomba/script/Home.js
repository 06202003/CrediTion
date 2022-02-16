var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-info', 'shadow');
  } else {
    nav.classList.remove('bg-info', 'shadow');
  }
});

$('.counter-count').each(function () {
  $(this)
    .prop('Counter', 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
