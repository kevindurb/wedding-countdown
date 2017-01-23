function debug(x) {
  var d = document.getElementById('debug');
  d.textContent = x;
}
function render() {
  var dayEl = document.getElementById('days');
  var hourEl = document.getElementById('hours');
  var minuteEl = document.getElementById('minutes');
  var secondEl = document.getElementById('seconds');
  var progress = document.getElementById('progress');

  var anniversary = moment('2016-11-23 18:30:00');
  var weddingNight = moment('2017-06-24 22:00:00');
  var today = moment();
  var days = weddingNight.diff(
    today,
    'days',
    true
  );

  var dayRemainder = days - parseInt(days);
  var hours = dayRemainder * 24;
  var hourRemainder = hours - parseInt(hours);
  var minutes = hourRemainder * 60;
  var minuteRemainder = minutes - parseInt(minutes);
  var seconds = minuteRemainder * 60;

  var d = parseInt(days);
  var h = parseInt(hours);
  var m = parseInt(minutes);
  var s = parseInt(seconds);

  // var total = weddingNight.diff(anniversary);
  // var progress = today.diff(anniversary);

  dayEl.textContent = d + ' days';
  hourEl.textContent = h + ' hours';
  minuteEl.textContent = m + ' minutes';
  secondEl.textContent = s + ' seconds';

//   debug(progress / total * 100);

//   progress.value = (progress / total) * 100;
}

render();

setInterval(render, 1000);
