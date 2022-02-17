const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const ProgressText = document.querySelector("#progressText")
const Scoretext = document.querySelector("#Score")
const progressBarFull = document.querySelector("#progressBarFull")

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: "4",

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: "4",

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: "4",

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: "4",

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: "4",

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: "4",

    },
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    ProgressText.innerText = `Question ${questionCouner} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = ` ${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener("click", e)
})
