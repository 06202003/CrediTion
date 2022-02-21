var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    nav.classList.add('warnaheader', 'shadow');
    document.getElementById('hilang').style.visibility = 'hidden';
  } else {
    nav.classList.remove('warnaheader', 'shadow');
    document.getElementById('hilang').style.visibility = 'visible';
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

anime({
  targets: '#animate',
  translateY: {
    value: 0,
  },
  translateX: {
    value: -40,
    duration: 2800,
  },
  rotate: {
    value: 345,
    duration: 2800,
  },
  scale: {
    value: 1,
    duration: 2600,
    delay: 1800,
  },
  delay: 150,
});

anime({
  targets: ['#logoanimate'],
  translateX: 0,
  keyframes: [{ rotate: 540 }, { rotate: 0 }, { rotate: 540 }, { rotate: 0 }],
  duration: 8000,
  easing: 'easeOutElastic(1, .8)',
  loop: true,
  rotate: 540,
});

const wave1 =
    'M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z',
  wave2 =
    'M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z',
  wave3 =
    'M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z',
  wave4 =
    'M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z';

anime({
  targets: '.wave-top > path',
  easing: 'linear',
  duration: 17500,
  loop: true,
  d: [{ value: [wave1, wave2] }, { value: wave3 }, { value: wave4 }, { value: wave1 }],
});

var xValues = ['Italy', 'France', 'Spain', 'USA', 'Argentina'];
var yValues = [55, 49, 44, 24, 15];
var barColors = ['red', 'green', 'blue', 'orange', 'brown'];

new Chart('myChart', {
  type: 'horizontalBar',
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'World Wine Production 2018',
    },
    scales: {
      xAxes: [{ ticks: { min: 10, max: 60 } }],
    },
  },
});
