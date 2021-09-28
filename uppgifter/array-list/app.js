const list = document.getElementById('list');
const textBox = document.getElementById("textbox");
const addBtn = document.getElementById("button");

const todos = [
    { text: "Hej på dig!", done: false },
    { text: "Programmera", done: true },
    { text: "Gå hem", done: false }
];

addBtn.addEventListener("click", addArr);

updateView();

function addArr() {
    todos.push({
        text: textBox.value,
        done: false
    });

    updateView();
};

function updateView() {

    list.innerHTML = "";

    for(let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        li.dataset.index = i;
        li.textContent = todos[i].text;
        if(todos[i].done) {
            li.style.textDecoration = "line-through";
        }
        list.appendChild(li);
        li.addEventListener('click', onItemClicked);
      }
    }    

      function onItemClicked(e) {

        todos[e.target.dataset.index].done = !todos[e.target.dataset.index].done;

        updateView();
    }

