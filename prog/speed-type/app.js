const startGameButton = document.getElementById("button");
const input = document.getElementById("input");
const mainContent = document.getElementById("main-content");
const statContent = document.getElementById("stats");
const textDisplay = document.getElementById("text-display");
const wpmDisplay = document.getElementById("wpm-display");
const scoreDisplay = document.getElementById("score-display");
const timeDisplay = document.getElementById("time-display");
const form = document.getElementById("form");
const splittedAlice = alice.split(" ");

const state = {
    currentWord: "",
    score: 0,
    timeElapsed: 0,
    gameLength: 30,
};

function getRandomWord() {
    return splittedAlice[
        Math.floor(Math.random() * splittedAlice.length)
    ];
}

function renderStats() {
    timeDisplay.textContent = state.gameLength - state.timeElapsed;
    scoreDisplay.textContent = state.score;
    wpmDisplay.textContent = calcWpm().toFixed(2);
}

function nextWord() {
    const word = getRandomWord();
    textDisplay.textContent = word;
    state.currentWord = word;
}

function calcWpm(){
    return Number(state.score / (state.timeElapsed / 60))
}

function createWordSpan(color, content) {
    const span = document.createElement("span");
    const style = "background-color: " + color;
    span.setAttribute("style", style);
    span.className = "typed-word";

    span.textContent = content;
    return span;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        startGameButton.className = "hide";
        input.className = "bruh";
        statContent.className = "";
    
        input.focus();
        nextWord();
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = input.value;

    if (userInput === "") {
        return;
    }

    const isCorrect = userInput === state.currentWord;

    let span;
    if (isCorrect) {
        span = createWordSpan('greenyellow', userInput);
        state.score += 1;
    } else {
        span = createWordSpan('red', userInput);
    }

    mainContent.appendChild(span);

    input.value = "";

    nextWord();
    renderStats();
});

function startClock() {
    setInterval(function () {
        state.timeElapsed += 1;
        renderStats();

        if (state.timeElapsed === state.gameLength) {
            alert("Game over. Your WPM is: " + wpmDisplay.textContent);
            window.location.reload();
        }
    }, 1000);
}

startGameButton.addEventListener("click", function (event) {
    startGameButton.className = "hide";
    input.className = "bruh";
    statContent.className = "";

    input.focus();
    nextWord();

    startClock();
});