let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let clearButton = document.getElementById("clear");
let timeElement = document.getElementById("time");
let loadElement = document.getElementById("load");

clearButton.addEventListener("click", function () {
    textarea.value = "";
});

function save() {
    let tidElement = update();
    localStorage.setItem("save", document.getElementById("textarea").value);
    localStorage.setItem("tid", tidElement);
};

window.onload = function () {
    tidElement = localStorage.getItem("tid");
};

loadElement.addEventListener("click", function load() {
  document.getElementById("textarea").value = localStorage.getItem("save");
  tidElement = localStorage.getItem("tid");
});

    function update() {
        const date = new Date();
      
        timeElement.innerHTML = "Last Changed " + 
          pad(date.getDate(), 2) + "/" +
          pad(date.getMonth(), 2) + " " +
          pad(date.getHours(), 2) + ":" + 
          pad(date.getMinutes(), 2)
      
      function pad(num, size) {
        num = num.toString();
        while(num.length < size) {
          num = "0" + num;
        }
        return num;
      }
    }
