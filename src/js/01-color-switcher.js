const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', handlerStart);
stopBtn.addEventListener('click', handlerStop);

let timerId = null;
stopBtn.disabled = true;

function handlerStart() {
  document.body.style.background = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function handlerStop() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
