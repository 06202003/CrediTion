var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('warnaheader', 'shadow');
    document.getElementById('hilang').style.visibility = 'visible';
    document.getElementById('hilang1').style.visibility = 'visible';
    document.getElementById('hilang3').style.visibility = 'visible';
  } else {
    nav.classList.remove('warnaheader', 'shadow');
    document.getElementById('hilang').style.visibility = ' hidden';
    document.getElementById('hilang1').style.visibility = 'hidden';
    document.getElementById('hilang3').style.visibility = 'hidden';
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
  targets: ['#logoanimate'],
  keyframes: [{ rotate: 540 }, { rotate: 0 }, { rotate: 540 }, { rotate: 0 }],
  duration: 8000,
  easing: 'easeOutElastic(1, .8)',
  loop: true,
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

// Grafik

new Chart(document.getElementById('myChart'), {
  type: 'horizontalBar',
  data: {
    labels: ['Brazil', 'United Kingdom', 'Spain', 'United States', 'France', 'Turkey', 'Australia', 'Canada', 'Ireland', 'South Korea'],
    datasets: [
      {
        label: 'Percentage of Population',
        backgroundColor: '#ebab3d',
        hoverBackgroundColor: 'white',
        data: [85, 70, 68, 67, 67, 63, 62, 61, 61, 59],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 12,
      },
    },
    // title: {
    //   display: true,
    //   fontColor: 'black',
    //   fontSize: 12,
    //   text: 'Countries with Highest Concern About Fake News On Internet',
    // },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontSize: 12,
            stepSize: 1,
            beginAtZero: true,
            categoryPercentage: 1,
            barPercentage: 80,
            barThickness: 95,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          ticks: {
            fontColor: 'white',
            fontSize: 12,
            stepSize: 10,
            beginAtZero: true,
            categoryPercentage: 1,
            barPercentage: 1,
            suggestedMax: 100,
          },
        },
      ],
    },
  },
});

// Data Array 2
var data = {
  labels: ['Social Politics', 'Discrimination', 'Health', 'Food & Drink', 'Financial Fraud', 'Science & Technology', 'Obituary', 'Joke', 'Natural Disaster', 'Traffic Regulations'],
  datasets: [
    {
      label: 'Percentage of Receiver',
      backgroundColor: '#ebab3d',
      hoverBackgroundColor: 'white',
      borderWidth: 1,
      data: [91.8, 88.6, 41.2, 32.6, 24.5, 23.7, 18.8, 17.6, 10.3, 4],
      yAxisID: 'dataY',
    },
  ],
};

// Membalikan data array
data.datasets[0].data.map((currentValue, index, array) => {
  array[index] = currentValue * -1;
});

var options = {
  tooltips: {
    callbacks: {
      //hitung dari kanan ke kiri biar tidak minus
      label: function (tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';

        if (label) {
          label += ': ';
        }
        label += tooltipItem.xLabel * -1;
        return label;
      },
    },
  },

  scales: {
    yAxes: [
      {
        id: 'dataY',
        categoryPercentage: 0.5,
        barPercentage: 1.3,
        position: 'right',
        ticks: {
          beginAtZero: true,
          fontColor: 'white',
          fontSize: 12,
        },
      },
    ],

    xAxes: [
      {
        id: 'bar-x-axis1',
        stacked: false,
        ticks: {
          callback: function (value, index, values) {
            return value * -1; // invert the sign for tick labelling.
          },
          beginAtZero: true,
          fontColor: 'white',
          fontSize: 12,
          stepSize: 10,
        },
      },
    ],
  },
  legend: {
    labels: {
      fontColor: 'white',
      fontSize: 12,
    },
  },
};

var grph = document.getElementById('myChart2').getContext('2d');
var myBarChart = new Chart(grph, {
  type: 'horizontalBar',
  data: data,
  options: options,
});

// Pop up about

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});
