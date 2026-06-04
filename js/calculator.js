const num1 = document.getElementById("numb1"); //i have no idea why is there a "b" in the id name, but whatever.
const num2 = document.getElementById("numb2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiply-by");
const devision = document.getElementById("devide-by");
const result = document.getElementById("calculation-result");

let number1 = 0;
let number2 = 0;
let equasion = 0;

num1.addEventListener("input", () => {
  number1 = Number(num1.value);
});

num2.addEventListener("input", () => {
  number2 = Number(num2.value);
});

plus.addEventListener("click", () => {
  equasion = number1 + number2;
  result.textContent = equasion;
});

minus.addEventListener("click", () => {
  equasion = number1 - number2;
  result.textContent = equasion;
});

devision.addEventListener("click", () => {
  equasion = number1 / number2;
  result.textContent = equasion;
});

multiplication.addEventListener("click", () => {
  equasion = number1 * number2;
  result.textContent = equasion;
});
