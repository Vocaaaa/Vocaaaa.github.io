const descriptionElement = document.querySelector(".question > span");
const answersContainer = document.querySelector(".question > .answers");

fetch("http://localhost:3000/question")
  .then(res => res.json())
  .then(data => {
      descriptionElement.innerHTML = data.description;

      data.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerText = answer;
          answersContainer.append(button);
          button.addEventListener("click", onAnswerClicked)
      });
  });
  function onAnswerClicked(e) {
      console.log(e.target.innerText);
      if(e.target.innerText = röd) {
          button.classList.add("red");
      }
  }