let scoreElement = document.getElementById('score');
let parentElement = document.getElementById('parent');
let playAgainButton = document.getElementById('play-again');
let accuracyElement = document.getElementById('accuracy');

let startTime;
let clickCount = 0;

parentElement.style.display = 'none';

playAgainButton.addEventListener('click', onPlayAgainClicked);
window.addEventListener('pointerdown', onWindowPointerDown);

createBalls();

function onWindowPointerDown() {
  clickCount++;
}

function onBallClicked(event) {
  document.body.removeChild(event.target);

  if(startTime == null) {
    startTime = new Date();
  }

  if(document.getElementsByClassName('ball').length == 0) {
    setTimeout(() => {
      let accuracy = (10 / clickCount) * 100;
      accuracyElement.innerHTML = 'Träffsäkerhet: ' + accuracy.toFixed(2);

      let endTime = new Date();
      let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      scoreElement.innerHTML = seconds + ' sekunder';

      parentElement.style.display = null;
    }, 0);
  }
}

function onPlayAgainClicked() {
  parentElement.style.display = 'none';

  createBalls();

  startTime = null;
  clickCount = 0;
}

function createBalls() {
  let i = 0;
  while(i < 10) {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = ((window.innerWidth - 80) * Math.random()) + "px";
    ball.style.top = ((window.innerHeight - 80) * Math.random()) + "px";
    ball.addEventListener('pointerdown', onBallClicked);
    document.body.appendChild(ball);
    i++;
  }
}