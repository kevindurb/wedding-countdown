var dayEl = document.getElementById('days');
var hourEl = document.getElementById('hours');
var minuteEl = document.getElementById('minutes');
var secondEl = document.getElementById('seconds');
var progressEl = document.getElementById('progress');
var percentEl = document.getElementById('percent');
var engaged = moment('2016-11-23 18:30:00-0600');
var weddingNight = moment('2017-06-24 21:00:00-0500');

function render() {
  var values = calcTime();
  updateCountdownText(values);
  positionPercent(values.percent);
  setProgressPercent(values.percent);
}

function calcTime() {
  var today = moment();
  var days = weddingNight.diff(today, 'days', true);
  var delta = weddingNight.diff(today, 'seconds', true);

  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  var seconds = delta % 60;

  var total = weddingNight.diff(engaged);
  var progress = today.diff(engaged);
  var percent = progress / total * 100;

  return {
    percent: parseInt(percent),
    days: parseInt(days),
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  };
}

function updateCountdownText(values) {
  dayEl.textContent = values.days + ' days';
  hourEl.textContent = values.hours + ' hours';
  minuteEl.textContent = values.minutes + ' minutes';
  secondEl.textContent = values.seconds + ' seconds';
}

function setProgressPercent(percent) {
  progressEl.value = percent;
}

function positionPercent(percent) {
  percentEl.style.left = percent + "%";
  percentEl.textContent = percent + "%";
}

render();

setInterval(render, 1000);

document.addEventListener('touchmove', function (event) {
  event.preventDefault();
});
