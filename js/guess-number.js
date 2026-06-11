const input = document.querySelector('.input-num');
const btn = document.querySelector('.btn-find');
const text = document.querySelector('.text');
const randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber)

document.querySelector('.guess-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (Number(input.value) < randomNumber) {
    text.textContent = 'Твоє число менше чим моє!';
    text.classList.add('false');
  }
  if (Number(input.value) > randomNumber) {
    text.textContent = 'Твоє число більше чим моє!';
    text.classList.add('false');
  }
  if (Number(input.value) === randomNumber) {
    text.textContent = `Ти вгадав число! ${randomNumber}`;
    text.classList.add('true');
    text.textContent.remove('false');
  }
});
