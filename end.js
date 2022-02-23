const userName = localStorage.getItem("userName")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const endText = document.querySelector('#end-text')

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
endText.textContent = userName
console.log(mostRecentScore)
console.log(userName)
console.log(endText)
console.log(highScores)

const saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: userName,
        id: Date.now()
    }
    highScores.push(score)
    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("/")
}
