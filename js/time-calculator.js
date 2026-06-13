const timeForm = document.querySelector('.time-list form');
const inputTime = document.querySelector('.input-time');
const daysSpan = document.querySelector('.days');
const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minuts');
const secondsSpan = document.querySelector('.seconds');
const Pwarnings = document.querySelector('.warnings');

const formatNumber = num => String(num).padStart(2, '0');

timeForm.addEventListener('submit', event => {
  event.preventDefault();

  const totalSecond = Number(inputTime.value.trim());
  console.log(totalSecond);

  if (totalSecond < 0) {
    Pwarnings.textContent = "Будь ласка, введіть не від'ємне число!";
    return;
  }
  if (Number.isNaN(totalSecond)) {
    Pwarnings.textContent = 'Будь ласка, введіть число і це будуть секунді.';
    return;
  }

  const days = Math.floor(totalSecond / 86400);
  let remainder = totalSecond % 86400;

  const hours = Math.floor(remainder / 3600);
  remainder %= 3600;

  const minutes = Math.floor(remainder / 60);
  const seconds = remainder % 60;

  daysSpan.textContent = days;
  hoursSpan.textContent = formatNumber(hours);
  minutesSpan.textContent = formatNumber(minutes);
  secondsSpan.textContent = formatNumber(seconds);
});
