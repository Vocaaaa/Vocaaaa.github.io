const buttons = document.getElementsByTagName("button");

function onButtonClicked(e) {
    localStorage.setItem("color", e.target.style.backgroundColor);
    document.body.style.backgroundColor = e.target.style.backgroundColor;
}

document.body.style.backgroundColor=  localStorage.getItem("color");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onButtonClicked);
}
