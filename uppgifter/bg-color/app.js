function changeColor() {
    let redInput = document.getElementById("input1").value;
    let greenInput = document.getElementById("input2").value;
    let blueInput = document.getElementById("input3").value;
    let color = "rgb(" + redInput + "," + greenInput + "," + blueInput + ")";
    document.body.style.backgroundColor = color;
    document.getElementById("text").innerHTML = color;
}

document.getElementById("input1").addEventListener("input", changeColor);
document.getElementById("input2").addEventListener("input", changeColor);
document.getElementById("input3").addEventListener("input", changeColor);

