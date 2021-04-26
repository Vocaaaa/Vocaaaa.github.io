highlightRandomCell();




function highlightRandomCell() {
    const cells = document.getElementsByClassName("cell");
    let random = Math.round((cells.length - 1) * Math.random());
    cells[random].classList.add("--highlighted");
}

random.addEventListener("click", );
