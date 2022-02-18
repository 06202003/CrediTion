var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('warnaheader', 'shadow');
  } else {
    nav.classList.remove('warnaheader', 'shadow');
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


// animasi
let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  loop: true,
  endDelay: 500
}); 

tl.add({
  targets: '.foxhead',
  scale: [0.75, 1],
  opacity: [0, 1],
})
.add({
  targets: '.foxpart',
  opacity: [0, 1],
  delay: anime.stagger(200),
  easing: 'easeInExpo',
}, '-=2000')
.add({
  targets: '#name-g path',
  opacity: [0, 1],
  translateX: [-25, 0],
  rotate: ['-45deg', 0],
  delay: anime.stagger(100),
}, '-=500')
.add({
  targets: 'svg',
  opacity: [1, 0],
});