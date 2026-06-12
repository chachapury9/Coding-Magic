const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const restart = document.getElementById("google-dino-restart");

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

let groundImg = new Image();
groundImg.src = "images/google-dino/Chromium_T-Rex-horizon.png";

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
      ctx.fillText("HI: " + highScore, 550, 50);
      restart.classList.remove("hide");
    }
  }
}

class Ground {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    ctx.drawImage(groundImg, this.x, this.y);
  }

  move() {
    this.x -= this.speed;
  }

  loop() {
    if (this.x < -1200) {
      let loopGround = new Ground(this.x + 1800, this.y, 5);
      loopGround.draw();
      loopGround.move();
      loopGround.loop();
    }
  }
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === " " && dino.onGround === true) {
    dino.y -= dino.jumpforce;
  }
});

restart.addEventListener("click", () => {
  location.reload();
});

let cactus = new Cactus(1000, 172, 5, 30, 70);
let ground = new Ground(-100, 220, 5);
let cactus2 = new Cactus(cactusDistance, 172, 5, 30, 70);

const gameLoop = setInterval(function () {
  cactusDistance = Math.round(Math.random() * (1500 - 1050) + 1050);
  ctx.clearRect(0, 0, 700, 300);

  ground.draw();
  ground.move();
  ground.loop();

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
}, 16);

setInterval(function () {
  score++;
}, 100);
