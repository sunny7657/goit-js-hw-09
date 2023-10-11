const formCreate = document.querySelector('.form');

formCreate.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  const form = event.target;
  const firstDelay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  let position = 0;
  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
    position += 1;
    delay += step;
    createPromise(position, delay)
      .then(value => {
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
