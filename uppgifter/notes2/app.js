const textArea = document.getElementsByTagName("textarea")[0];
const loadBtn = document.getElementById("load");
const saveBtn = document.getElementById("save");
const fontSelect = document.getElementsByTagName("select")[2];
const bgSelect = document.getElementsByTagName("select")[0];
const colorSelect = document.getElementsByTagName("select")[1];
const sizeSelect = document.getElementsByTagName("select")[3];

saveBtn.addEventListener("click", onSave);
loadBtn.addEventListener("click", onLoad);
fontSelect.addEventListener('change', onFontChange);
bgSelect.addEventListener('change', onBgChange);
colorSelect.addEventListener('change', onColorChange);
sizeSelect.addEventListener('change', onSizeChange);

textArea.style.fontFamily = localStorage.getItem('font');
fontSelect.value = localStorage.getItem('font');

let background = localStorage.getItem("background" || "white");
textArea.style.background = background;
bgSelect.value = background;

let font = localStorage.getItem("font" || "monospace");
textArea.style.fontFamily = font;
fontSelect.value = font;

let color = localStorage.getItem("color" || "black");
textArea.style.color = color;
colorSelect.value = color;

let size = localStorage.getItem("size" || "normal");
textArea.style.fontSize = size;
sizeSelect.value = size;

function onSave() {
    localStorage.setItem("text", textArea.value);
};

function onLoad() {
    textArea.value = localStorage.getItem("text");
};
function onFontChange() {
    textArea.style.fontFamily = fontSelect.value;
    localStorage.setItem('font', fontSelect.value);
  }
  function onBgChange() {
    textArea.style.backgroundColor = bgSelect.value;
    localStorage.setItem("background", bgSelect.value);
  }
  function onColorChange() {
    textArea.style.color = colorSelect.value;
    localStorage.setItem("color", colorSelect.value);
  }
  function onSizeChange() {
    textArea.style.fontSize = sizeSelect.value;
    localStorage.setItem("size", sizeSelect.value);
  }