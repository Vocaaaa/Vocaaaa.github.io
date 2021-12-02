const addBtn = document.querySelector(".plus");
const displayElement = document.querySelector(".display");

addBtn.addEventListener("click", add);

let counter = 0;

function add() {
    counter++;
    displayElement.innerHTML = counter;
};