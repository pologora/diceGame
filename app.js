//Game stats variables
let player1Score = 0
let player2Score = 0
let player1Turn = true
let gameOver = false

//DOM nodes
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const winMessage = document.getElementById("message")


rollBtn.addEventListener("click", () => {
    if (!gameOver) {

        const dice = Math.floor(Math.random() * 6) + 1
        if (player1Turn) {
            player1Dice.textContent = dice
            player1Score += dice
            winMessage.textContent = "Player 2 Turn"
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
        } else {
            player2Dice.textContent = dice
            player2Score += dice
            winMessage.textContent = "Player 1 Turn"
            player1Dice.classList.add("active")
            player2Dice.classList.remove("active")
            if (player1Score >= 20 || player2Score >= 20) {
                rollBtn.style.display = "none"
                resetBtn.style.display = "block"
                gameOver = !gameOver
                if (player1Score > player2Score) {
                    winMessage.textContent = "Player 1 wins!"
                    player1Dice.classList.add = "active"
                    player2Dice.classList.remove = "active"
                } else if (player2Score > player1Score) {
                    winMessage.textContent = "Player 2 wins!"
                    player2Dice.classList.add = "active"
                    player1Dice.classList.remove = "active"
                } else {
                    winMessage.textContent = "Remis!!!"
                    player2Dice.classList.add = "active"
                    player1Dice.classList.add = "active"
                }
            }
        }

        player1Turn = !player1Turn
        player1Scoreboard.textContent = player1Score
        player2Scoreboard.textContent = player2Score


    }

})

resetBtn.addEventListener("click", () => {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    gameOver = false
    player1Dice.textContent = "0"
    player2Dice.textContent = "0"
    player1Scoreboard.textContent = player1Score
    player2Scoreboard.textContent = player2Score
    resetBtn.style.display = "none"
    winMessage.textContent = "Player 1 Turn"
    rollBtn.style.display = "block"
})
