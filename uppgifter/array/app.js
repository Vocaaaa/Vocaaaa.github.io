let a = prompt();
let b = prompt();

function calc() {
    let rusult = a + " " + b;
    document.getElementById("text").innerText = rusult;
}
calc();