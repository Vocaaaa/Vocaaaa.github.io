const textArea = document.getElementsByTagName("textarea")[0];
const loadBtn = document.getElementById("load");
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", onSave);
loadBtn.addEventListener("click", onLoad);

function onSave() {
    localStorage.setItem("text", textArea.value);
};

function onLoad() {
    textArea.value = localStorage.getItem("text");
};