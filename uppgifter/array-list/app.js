let todos = ["Gå till skolan", "Programmera", "Köpa mat!"];
let list = document.getElementById("list");
let addBtn = document.getElementById("button");
let textBox = document.getElementById("textbox");
let newArr = textBox.value;




for(i = 0; i < todos.length; i++) {
    let li = document.createElement('li');
    li.textContent = todos[i];
    list.appendChild(li);
    li.addEventListener("click", tuning);
    addBtn.addEventListener("click", addText);
    
function tuning(e) {
    if(li.style.textDecoration == "line-through") {
    li.style.textDecoration = "none";
    }
    else{
        li.style.textDecoration = "line-through";
    }
}
function addText() {
    todos.push(textBox.value);
    console.log(todos[3]);
    
}
}