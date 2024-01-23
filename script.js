let player = "";
let winner = "";
let itsTurnTo = document.getElementById("itsTurnTo");

whoIsNext();

function whoIsNext() {
    if (player == "X") {
        player = "O";
        itsTurnTo.innerText = "O";
    } else {
       player = "X";
       itsTurnTo.innerText = "X";
    }
}

let square = document.querySelectorAll(".square");
let clickCounter = 0;

square.forEach((item) => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("O") && !item.classList.contains("X")) {
            item.classList.add(player);
            if (player == "X") {
                item.innerText = "X";
            } else if (player == "O") {
                item.innerText = "O";
            }
            ++clickCounter;
            whoIsNext();
            whoWin();
        }
    })
})

const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

function whoWin() {
    for (let i = 0; i < winPositions.length; ++i) {
        if (square[winPositions[i][0]].classList.contains("X") && square[winPositions[i][1]].classList.contains("X") && square[winPositions[i][2]].classList.contains("X")) {
            winner = "Winner is:X";
            gameOver(winner);
            return 1;
        } else if (square[winPositions[i][0]].classList.contains("O") && square[winPositions[i][1]].classList.contains("O") && square[winPositions[i][2]].classList.contains("O")) {
            winner = "Winner is:O";
            gameOver(winner);
        } else if (clickCounter >= 9 && winner != "X" && winner != "O") {
            winner = "Draw !!!";
            gameOver(winner);
        }
    }
}

let winnerBlock = document.getElementById("winnerBlock");
let winnerSpan = document.getElementById("winnerSpan");
let btnNewGame = document.getElementById("btnRestartGame");
let board = document.getElementById("board");

function gameOver(winner) {
    board.style.pointerEvents = "none";
    winnerBlock.style.display = "flex";
    winnerSpan.innerText = winner;
}

function newGame() {
    document.location.reload();
}
btnNewGame.addEventListener("click", newGame);