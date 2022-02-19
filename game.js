const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const ProgressText = document.querySelector("#progressText")
const ScoreText = document.querySelector("#score")
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
        answer: 2,

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: 3,

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: 4,

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: 1,

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: 3,

    },
    {
        question: "Qué es esto?",
        choice1: "perro",
        choice2: "carro",
        choice3: "gato",
        choice4: "bicicleta",
        answer: 2,

    }
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 6
//This function starts the game//
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}
// This fucntion gets the new question//
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    ProgressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`//question one of ...
    progressBarFull.style.width = ` ${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) //calculate the value of the questions index
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })
    availableQuestions.splice(questionsIndex, 1)// removing elements from the array and replace

    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if (classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()
