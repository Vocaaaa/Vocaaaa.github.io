initFaq();

function initFaq() {
    const faqBtns = document.querySelectorAll(".question button");
    let openQuestion = null;
    const onFaqButtonClicked = e => {
        if(openQuestion != null && openQuestion != e.target.parentElement) {
            openQuestion.classList.add("closed");
        }
        openQuestion = e.target.parentElement;
        openQuestion.classList.toggle("closed");

    } 

    for(i = 0; i < faqBtns.length; i++) {
        faqBtns[i].addEventListener("click", onFaqButtonClicked);
    }
}

