const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const scientist1 = document.querySelector('.scientist-1');
const scientist2 = document.querySelector('.scientist-2');
const scientist3 = document.querySelector('.scientist-3');
const scientist4 = document.querySelector('.scientist-4');
const scientist5 = document.querySelector('.scientist-5');
const scientist6 = document.querySelector('.scientist-6');
const scientist7 = document.querySelector('.scientist-7');
const scientist8 = document.querySelector('.scientist-8');
const scientist9 = document.querySelector('.scientist-9');
const scientist10 = document.querySelector('.scientist-10');
const scientist11 = document.querySelector('.scientist-11');
const scientist12 = document.querySelector('.scientist-12');
const scientists = [
  scientist1,
  scientist2,
  scientist3,
  scientist4,
  scientist5,
  scientist6,
  scientist7,
  scientist8,
  scientist9,
  scientist10,
  scientist11,
  scientist12,
];

function clearBorder() {
  scientists.forEach(scien => {
    scien.classList.remove('scientist-border');
    scien.classList.remove('scientist-border-older');
    scien.classList.remove('scientist-border-younger');
    scien.classList.remove('found-date');
    scien.classList.remove('is-hidden');
  });
}
const divList = document.querySelector('.scientist-list');
btn1.addEventListener('click', () => {
  clearBorder();
  scientist6.classList.add('scientist-border');
  scientist8.classList.add('scientist-border');
  scientist11.classList.add('scientist-border');
  scientist5.classList.add('scientist-border');
  scientist4.classList.add('scientist-border');
  scientist1.classList.add('scientist-border');
  scientist10.classList.add('scientist-border');
});
btn2.addEventListener('click', () => {
  clearBorder();
  scientist1.classList.add('scientist-border');
  scientist1.classList.add('found-date');
});
btn3.addEventListener('click', () => {
    clearBorder();

});
btn4.addEventListener('click', () => {
  clearBorder();
  scientist5.classList.add('scientist-border');
});
btn5.addEventListener('click', () => {
  clearBorder();
});
btn6.addEventListener('click', () => {
  clearBorder();
  scientist1.classList.add('is-hidden');
});
btn7.addEventListener('click', () => {
  clearBorder();
  scientist7.classList.add('scientist-border');
});
btn8.addEventListener('click', () => {
  clearBorder();
  scientist3.classList.add('scientist-border-older');
  scientist5.classList.add('scientist-border-younger');
});
btn9.addEventListener('click', () => {
  clearBorder();
  scientist3.classList.add('scientist-border');
  // alert("Все працює")
});
