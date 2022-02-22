let startTime = null;
let timer = document.getElementById("time");
let parent = document.getElementById("parent");
let text = document.getElementById("text");
let button = document.getElementById("knapp");

document.body.style.background = 'red';
button.style.display = "none";

const delay = 3000 + 4000 * Math.random();
setTimeout(onTimeout, delay);

window.addEventListener('pointerdown', onWindowClicked);
button.addEventListener("pointerdown", restart());

function onTimeout() {
  document.body.style.background = 'lime';
  startTime = new Date();
}
function onWindowClicked() {
    if(startTime == null) {
      text.innerHTML = ('Du klickade för snabbt!');
      button.style.display = "none";
    }
    else {
      const endTime = new Date();
      const deltaTime = endTime.getTime() - startTime.getTime();
      timer.innerHTML = (deltaTime) + " ms";
      text.style.display = "none";
      button.style.display = "block";
    }
}
function restart() {
  if(document.getElementById('knapp').clicked == true)
{
   location.reload();
}
}
function rip() {

}