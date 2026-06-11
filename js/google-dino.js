const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cactusDistance = 0;
let score = 0;
let highScore = 0;

//image storage:
let dinoImg1 = new Image();
dinoImg1.src = "images/google-dino/Chrome_T-Rex_Left_Run.webp";

let cactusImg = new Image();
cactusImg.src = "images/google-dino/1_Cactus_Chrome_Dino.webp";

let dinoImg2 = new Image();
dinoImg2.src = "images/google-dino/Chrome_T-Rex_Right_Run.webp";

let dino = {
  onGround: true,
  x: 200,
  y: 185,
  force: 5,
  jumpforce: 200,
  velocity: 0,

  draw(x, y) {
    ctx.drawImage(dinoImg1, x, y, 50, 50);
  },

  fall() {
    if (dino.y < 185) {
      this.onGround = false;
      this.y += this.force;
    } else {
      this.onGround = true;
    }
  },
};

class Cactus {
  constructor(x, y, speed, w, h) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.w = w;
    this.h = h;
  }

  move() {
    this.x -= this.speed;
  }

  draw() {
    ctx.drawImage(cactusImg, this.x, this.y, this.w, this.h);
  }

  return() {
    let distance = -100;
    if (this.x < distance) {
      this.x = cactusDistance;
    }
  }

  collide() {
    if (dino.x > this.x && this.x > 180 && dino.y > 125) {
      clearInterval(gameLoop);
      console.log("game stopped");
    }
  }
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === " " && dino.onGround === true) {
    dino.y -= dino.jumpforce;
  }
});

let cactus = new Cactus(1000, 172, 5, 30, 70);
let cactus2 = new Cactus(cactusDistance, 172, 5, 30, 70);

const gameLoop = setInterval(function () {
  cactusDistance = Math.round(Math.random() * (1500 - 1050) + 1050);
  ctx.clearRect(0, 0, 700, 300);
  ctx.beginPath();
  ctx.moveTo(0, 220);
  ctx.lineTo(700, 220);
  ctx.stroke();
  dino.draw(dino.x, dino.y);
  dino.fall();

  cactus.draw();
  cactus.collide();
  cactus.move();

  cactus.return();

  cactus2.draw();
  cactus2.collide();
  cactus2.move();

  cactus2.return();

  ctx.font = "24px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(score, 650, 50);
  ctx.fillText(highScore, 600, 50);
}, 16);

setInterval(function () {
  score++;
}, 100);
