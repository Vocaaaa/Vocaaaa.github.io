const containerElement = document.getElementById("container");
const button = document.getElementById("button");

let count = parseInt(localStorage.getItem("count"));

if(isNaN(count)) {
    count = 0;
}

count++;
if(count == 1) {
    containerElement.textContent = `Du har besökt denna hemsida ${count} gång.`;
}
    else{
containerElement.textContent = `Du har besökt denna hemsida ${count} gånger.`;
}

localStorage.setItem("count", count);
button.addEventListener("click", reset());
