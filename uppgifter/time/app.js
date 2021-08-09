let d;
let time = document.getElementById("tid");

d = new Date();

time.innerHTML = d;

window.setInterval("run()", 1000);

function run() {
    window .location.reload();
}
