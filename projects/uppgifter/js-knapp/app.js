let button = document.getElementById("knapp");

function logg() {
    console.log("Det är roligt att vara tillbaka i skolan!");
    alert("We have detected a virus on your PC, for help call 1-900-69420-72");
}

button.addEventListener("click", logg);