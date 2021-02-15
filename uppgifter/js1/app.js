let balls = document.getElementsByClassName('ball');
let scoreElement = document.getElementById('score');

let i = 0;
while(i < 10) {
  balls[i].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
  balls[i].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
  balls[i].addEventListener('pointerdown', onBallClicked);
  i++;
}

let startTime = new Date();

function onBallClicked(event) {
  document.body.removeChild(event.target);

  if(document.getElementsByClassName('ball').length == 0) {
    let endTime = new Date();
    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    scoreElement.innerHTML = seconds + ' sekunder';
  }
}