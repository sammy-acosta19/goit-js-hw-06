let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');


function updateCounter(value) {
  counterValue += value;
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
  updateCounter(-1);
});

incrementButton.addEventListener('click', () => {
  updateCounter(1);
});






