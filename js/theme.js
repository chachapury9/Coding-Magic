const themeBtn = document.getElementById("themeSwitch");
let state = "white";
const inputs = document.querySelectorAll("input");
const btns = document.querySelectorAll("button");
const themeVisual = document.getElementById("theme-visual");

themeBtn.addEventListener("click", () => {
  switch (state) {
    case "white":
      state = "black";
      console.log(state);
      themeVisual.setAttribute("href", "./images/Group72.svg");
      document.body.classList.add("black");
      document.body.querySelector("nav").classList.add("black");
      document.body.querySelector(".nav-list").classList.add("black");
      document.body.querySelector("header").classList.add("black");

      inputs.forEach((item) => {
        item.classList.add("white-border");
      });

      btns.forEach((item) => {
        item.classList.add("white-border");
        document
          .getElementById("google-dino-restart")
          .classList.remove("white-border");
        document.getElementById("team-right").classList.remove("white-border");
        document.getElementById("team-left").classList.remove("white-border");

        themeBtn.classList.remove("white-border");
      });
      break;
    case "black":
      state = "white";
      console.log(state);
      themeVisual.setAttribute("href", "./images/Group71.svg");
      document.body.classList.remove("black");
      document.body.querySelector("header").classList.remove("black");
      document.body.querySelector("nav").classList.remove("black");
      document.body.querySelector(".nav-list").classList.remove("black");

      inputs.forEach((item) => {
        item.classList.remove("white-border");
      });

      btns.forEach((item) => {
        item.classList.remove("white-border");
      });
      break;
  }
  console.log(inputs);
  console.log(btns);
});
