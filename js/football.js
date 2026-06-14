const div = document.querySelector('.grass');
const ball = document.querySelector('.ball');

div.addEventListener('click', e => {
  let targetX = e.offsetX;
  let targetY = e.offsetY;

  let ballWidth = ball.offsetWidth;
  let ballHeight = ball.offsetHeight;

  let finalX = targetX - ballWidth / 2;
  let finalY = targetY - ballHeight / 2;

  ball.style.left = finalX + 'px';
  ball.style.top = finalY + 'px';
});
