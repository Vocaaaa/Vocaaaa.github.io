const startButton = document.getElementById('knapp');
let timer = document.getElementById("tid");
let stopp = document.getElementById("stopp");
let startTime = null;
let intervalId = null;

stopp.style.display = ("none");

startButton.addEventListener('click', onStart);
stopp.addEventListener("click", onStop)

function onStart() {
  startTime = new Date();
  intervalId = setInterval(onTick, 10);
}

function onTick() {
  const now = new Date();
  const totalTime = now.getTime() - startTime.getTime();
  const totalSec = totalTime / 1000;
  stopp.style.display = ("block");
  startButton.style.display = ("none");
  timer.innerHTML = (totalSec.toFixed(3));
}
function onStop() {
    clearInterval(intervalId);
    stopp.style.display = ("none");
    startButton.style.display = ("block");
}