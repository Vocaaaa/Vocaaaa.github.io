const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const counterView = document.getElementById("counter");

minusButton.addEventListener("click", onMinusButtonClicked);
plusButton.addEventListener("click", onPlusButtonClicked);

let counter = parseInt( localStorage.getItem("counter") );
if(isNaN(counter)) {
  counter = 0;
}
counterView.textContent = counter;

function onMinusButtonClicked() {
  counter--;
  counterView.textContent = counter;
  localStorage.setItem("counter", counter);
}

function onPlusButtonClicked() {
  counter++;
  counterView.textContent = counter;
  localStorage.setItem("counter", counter);
}