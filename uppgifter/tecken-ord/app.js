let textarea = document.querySelector("write");
let text = document.querySelector("text");

textarea.addEventListener("input", function (event) {
    text.innerText = textarea.value;
});