const quizForm = document.querySelector('.quiz-form');
const btn = document.querySelector("#submit-button");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "one right angle"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;

    }
    output.innerText = "Your Score is " + score;

}

btn.addEventListener('click', calculateScore)