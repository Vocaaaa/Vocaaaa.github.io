const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

setInterval(update, 100);

function update() {
  const date = new Date();

  timeElement.innerHTML = 
    pad(date.getHours(), 2) + ":" + 
    pad(date.getMinutes(), 2) + ":" + 
    pad(date.getSeconds(), 2);

  dateElement.innerHTML =
    date.getFullYear() + "-" + 
    pad(date.getMonth() + 1, 2) + "-" + 
    pad(date.getDate(), 2); 
}

function pad(num, size) {
  num = num.toString();
  while(num.length < size) {
    num = "0" + num;
  }
  return num;
}