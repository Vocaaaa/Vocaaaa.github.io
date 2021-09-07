let addBtn = document.getElementById("add");
let subBtn = document.getElementById("sub");
let box = document.getElementById("qtyBox");

let number = box.innerHTML;

localStorage.getItem("count");

addBtn.addEventListener('click', addNumber);
subBtn.addEventListener('click', subNumber);

function addNumber() {
    localStorage.setItem("count", number);
    box.value = parseInt(box.value) + 1;
}   

function subNumber() {
    localStorage.setItem("count", number);
    if (box.value <= -999) {
        box.value = -999;
    }
    else{
        localStorage.setItem("count", number);
        box.value = parseInt(box.value) - 1;
    }
}