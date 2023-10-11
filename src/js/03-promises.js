const elements = {
  inputDelay: document.querySelector('input[name=delay]'),
  inputStep: document.querySelector('input[name=step]'),
  inputAmount: document.querySelector('input[name=amount]'),
  btn: document.querySelector('.btn'),
};

elements.btn.addEventListener('click', onClick);

function onClick() {
  const firstDelay = Number(elements.inputDelay.value);
  const step = Number(elements.inputStep.value);
  const amount = Number(elements.inputAmount.value);

  let position = 0;
  let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
    position += i;
    delay += step;
    createPromise({ position, delay })
      .then((position, delay) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch((position, delay) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise({ position, delay }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
