const inp1 = document.querySelector('.first-inp');
const inp2 = document.querySelector('.second-inp');
const inp3 = document.querySelector('.third-inp');
const text = document.querySelector('.biggest-num');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.sub-button');
document.querySelector('.form-3num').addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    Number(inp1.value) > Number(inp2.value) &&
    Number(inp1.value) > Number(inp3.value)
  ) {
    text.textContent = `Найбільше число, яке ви ввели - ${inp1.value}`;
  }
  if (
    Number(inp2.value) > Number(inp1.value) &&
    Number(inp2.value) > Number(inp3.value)
  ) {
    text.textContent = `Найбільше число, яке ви ввели - ${inp2.value}`;
  }
  if (
    Number(inp3.value) > Number(inp1.value) &&
    Number(inp3.value) > Number(inp2.value)
  ) {
    text.textContent = `Найбільше число, яке ви ввели - ${inp3.value}`;
  }
  if (Number(inp1.value) === '') {
    inp1.value = 0;
    text.textContent = 'В всіх інпутах має стояти число';
  }
  if (Number(inp2.value) === '') {
    text.textContent = 'В всіх інпутах має стояти число';
    inp2.value = 0;
  }
  if (Number(inp3.value) === '') {
    text.textContent = 'В всіх інпутах має стояти число';
    inp3.value = 0;
  }
  if ((Number(inp1.value) === Number(inp2.value)) === Number(inp3.value)) {
    text.textContent = `Всі цифри однакові!`;
  }
});
