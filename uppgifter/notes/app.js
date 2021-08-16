let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
    textarea.value = "";
});

function save() {
    localStorage.setItem('comment-save', document.getElementById('textarea').value);
}

window.onload = function () {
    document.getElementById('textarea').value = localStorage.getItem('comment-save');
};