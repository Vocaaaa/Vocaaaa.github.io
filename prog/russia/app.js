let plusE = document.getElementById("plus");
let minusE = document.getElementById("minus");
let counterD = document.getElementById("counter");

let counter = 0;

plusE.addEventListener("click", function bruh(params) {
    counter++;
    counterD.textContent = counter;
});
minusE.addEventListener("click", function trr(params) {
    counter--;
    counterD.textContent = counter;
});