const todos = [
  { note: 'Koka kaffe före skolan', done: true },
  { note: 'Gå till skolan',         done: true },
  { note: 'Programmera',            done: false },
  { note: 'Köpa mat',               done: false },
  { note: 'Gå och såva!',           done: false }
];

renderTodos();

function renderTodos() {
  let todosElement = document.querySelector("#todos");
  for(i = 0; i < todos.length; i++) {
    const div = document.createElement("div");
    todosElement.appendChild(div);
    div.textContent = todos[i].note;
    div.classList.add("todo");
    if(todos[i].done == true) {
      div.classList.add("done")
    }
  }
  /*
    Din uppgift är att skriva ut alla todos inuti #todos elementet.

    Loopa igenom todos arrayn och skapa ett div-element för varje item ur arrayn enligt följande:
      <div class="todo">NOTE FRÅN TODO</div>
    Ifall todons done variabel är true skall div-elementet också ha klassen .done enligt följande:
      <div class="todo done">NOTE FRÅN TODO</div>
    
    - Du får bara ändra på javascript koden inuti funktionen renderTodos.
    - Du får inte ändra på index.html filen
    - Du skall styla sidan och skriva css-kod i style.css för att få sidan att se fin ut.
  */
}