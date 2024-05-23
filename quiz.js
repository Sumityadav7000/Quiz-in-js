const quizBox = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hyper Text Ma",
        b: "Hyper Chek the Me",
        c: "Hey Markup Language",
        d: "Hyper Text Markup Language",
        ans: "option4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Hyper Chek the Me",
        c: "Hey Markup Language",
        d: "Cas Keid Syle Shet",
        ans: "option1"
    },
    {
        question: "Q3: What is the full form of JS?",
        a: "Hyper Text Ma",
        b: "JavaScript",
        c: "Hey Markup Language",
        d: "Hyper Text Markup Language",
        ans: "option2"
    },
    {
        question: "Q4: Use of HTML?",
        a: "Hyper Text Ma",
        b: "Hyper Chek the Me",
        c: "Draw Structure",
        d: "Draw Strr",
        ans: "option3"
    }
];

const questions = document.querySelector(".head");
const option1 = document.querySelector("#option1 + label");
const option2 = document.querySelector("#option2 + label");
const option3 = document.querySelector("#option3 + label");
const option4 = document.querySelector("#option4 + label");
const btn = document.querySelector("#submit");
const btn2 = document.querySelector("#restart")
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showanswer");

let questionCount = 0;
let score = 0;

function loadQuestion() {
    const questionList = quizBox[questionCount];
    questions.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

function getAnswer() {
    let answer;
    answers.forEach((currentEl) => {
        if (currentEl.checked) {
            answer = currentEl.id;
        }
    });
    return answer;
}

btn.addEventListener('click', () => {
    const checkedAnswer = getAnswer();
    if (checkedAnswer === quizBox[questionCount].ans) {
        score++;
    }
    questionCount++;
    answers.forEach((currentEl) => currentEl.checked = false);
    if (questionCount < quizBox.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `<h3>Your score: ${score} / ${quizBox.length}</h3>`;
        btn.disabled = true;
    }
});
btn2.addEventListener("click",()=>{
    location.reload()
})

