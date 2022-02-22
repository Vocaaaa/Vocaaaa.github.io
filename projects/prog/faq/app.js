const qna = [
    {   question: "Vad gör man på programutvecklare?",     answer: "Man programmerar"},
    {   question2: "Vad är JavaScript?",                    answer2: "Ett kodspråk"}
    
];

let arrow = document.querySelector(".down-arrow");
let arrow2 = document.querySelector(".down-arrow2");
const answerContainer = document.querySelector(".answer1-container");
const answer2Container = document.querySelector(".answer2-container");
let answer1 = document.querySelector(".answer1");

function showAnswer() {
    answerContainer.classList.toggle("block");
    answerContainer.classList.toggle("animation");
    arrow.classList.toggle("rotate");
}

function showAnswer2() {
    answer2Container.classList.toggle("block");
    answer2Container.classList.toggle("animation");
    arrow.classList.toggle("rotate");
}

