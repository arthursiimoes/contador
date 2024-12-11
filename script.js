const dd = document.getElementById('dd');
const hr = document.getElementById('hr');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

const func = () => {
  const today = Date.now();
  const newdate = new Date("December 8, 2024 23:10:00");
  const diff = today - newdate;

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const dayDiff = Math.floor(Math.abs(diff) / day);
  const hrsDiff = Math.floor((Math.abs(diff) % day) / hour);
  const minDiff = Math.floor(((Math.abs(diff) % day) % hour) / min);
  const secDiff = Math.floor((((Math.abs(diff) % day) % hour) % min) / sec);

  dd.innerHTML = dayDiff;
  hr.innerHTML = hrsDiff;
  mins.innerHTML = minDiff;
  secs.innerHTML = secDiff;
}

var g = setInterval(() => func(), 1000);
