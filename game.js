const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const progressText = document.querySelector("#progressText")
const scoreText = document.querySelector("#score")
const progressBarFull = document.querySelector("#progressBarFull")
const images = document.querySelector('#images')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Qué es esto?",
        choice1: "Perro",
        choice2: "Carro",
        choice3: "Gato",
        choice4: "Bicicleta",
        answer: 2,
        url: '../public/assets/images/01.jpg'
    },
    {
        question: "Qué es esto?",
        choice1: "Anillo",
        choice2: "Camion",
        choice3: "Leon",
        choice4: "Guitarra",
        answer: 3,
        url: '../public/assets/images/02.jpg'
    },
    {
        question: "Qué es esto?",
        choice1: "Puerta",
        choice2: "Zapato",
        choice3: "Brazalete",
        choice4: "Laptop",
        answer: 4,
        url: '../public/assets/images/03.jpg'
    },
    {
        question: "Qué es esto?",
        choice1: "Lampara",
        choice2: "Flor",
        choice3: "Vaso",
        choice4: "Gallina",
        answer: 1,
        url: '../public/assets/images/04.jpg'
    },
    {
        question: "Qué es esto?",
        choice1: "Perfume",
        choice2: "Dragon",
        choice3: "Cerradura",
        choice4: "Carta",
        answer: 3,
        url: '../public/assets/images/05.jpg'
    },
    {
        question: "Qué es esto?",
        choice1: "Cable",
        choice2: "Leche",
        choice3: "Lata",
        choice4: "Arroz",
        answer: 2,
        url: '../public/assets/images/06.jpg'
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
    images.src = currentQuestion.url // Llama img inicial
    console.log(currentQuestion.url)
}

// This fucntion gets the new question//
getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    } // Moves to the end pg



    questionCounter++ //  Increments number of question 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` // prints questions one of ...
    progressBarFull.style.width = ` ${(questionCounter / MAX_QUESTIONS) * 100}%` // Rellena barra progreso

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // Assigns  an index to the question
    currentQuestion = availableQuestions[questionsIndex] //  Brings data from the selected option
    // console.log(currentQuestion)

    question.innerText = currentQuestion.question

    images.src = currentQuestion.url // Selects image depending on the question
    console.log(currentQuestion.url)

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
        const selectedAnswer = selectedChoice.dataset["number"] // Select number of the question

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if (classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 200)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()