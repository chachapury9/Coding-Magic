const right = document.getElementById("team-right");
const left = document.getElementById("team-left");
const img = document.getElementById("team-img");
const desc = document.getElementById("team-desc");
const teamName = document.getElementById("team-name");

let currentSlide = 0;
const team = [
  {
    name: "Ніколай Новічков",
    description:
      "Займався секціями: перевірка року, камінь-ножиці-папір, калькулятор, гугл-динозавр, слайдер команди. P.S: Не жаба",
    pfpUrl: "./images/frog.jpg",
  },

  {
    name: "Ельдар Присяжнюк",
    description:
      "Займався секціями: Вгадай число, вгадай число, калькулятор часу, 3 числа,футбол, встановити відповідні риси вчених. З ДНЕМ НАРОДЖЕННЯ!",
    pfpUrl: "./images/eldar.png",
  },
];

function renderCard(slide) {
  teamName.textContent = team[slide].name;
  desc.textContent = team[slide].description;
  img.src = team[slide].pfpUrl;
}

right.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % team.length;
  console.log(currentSlide);
  //   if (currentSlide > team.length - 1) {
  //     currentSlide = 0;
  //   } //just to make sure

  renderCard(currentSlide);
});

renderCard(currentSlide);

left.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % team.length;
  console.log(currentSlide);
  //   if (currentSlide > team.length - 1) {
  //     currentSlide = 0;
  //   } //just to make sure

  renderCard(currentSlide);
});
