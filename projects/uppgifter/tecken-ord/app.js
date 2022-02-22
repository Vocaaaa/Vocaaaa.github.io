const textArea                = document.getElementById('textarea');
const charactersNumberDisplay = document.getElementById('characters');
const wordsNumberDisplay      = document.getElementById('words');

textArea.addEventListener('input', onInput);

function onInput() {
  charactersNumberDisplay.textContent = textArea.value.length;
  wordsNumberDisplay.textContent = countWords(textArea.value);
}

function countWords(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  return str.split(' ').length;
}