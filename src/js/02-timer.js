import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const elements = {
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
  btn: document.querySelector('[data-start]'),
};

elements.btn.disabled = true;

const currentDay = new Date();
const current = currentDay.getTime();
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selected = Date.parse(selectedDates);
    if (selected < current) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    } else {
      elements.btn.disabled = false;
      elements.btn.addEventListener('click', () => {
        timerId = setInterval(() => {
          const currentTime = new Date();
          const ms = selected - currentTime.getTime();
          elements.day.textContent = addLeadingZero(convertMs(ms).days);
          elements.hour.textContent = addLeadingZero(convertMs(ms).hours);
          elements.minute.textContent = addLeadingZero(convertMs(ms).minutes);
          elements.second.textContent = addLeadingZero(convertMs(ms).seconds);
          if (ms < 0) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
