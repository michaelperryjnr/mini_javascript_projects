//tic tac toe game

const cells = document.querySelectorAll(".cell");
const cellContainer = document.querySelector(".cell-container");
const message = document.querySelector(".message");
const resetBtn = document.querySelector(".reset");
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const player1Moves = [];
const player2Moves = [];
const playersturn = document.querySelector(".player");
const player1wins = document.querySelector(".player1-wins");
const player2wins = document.querySelector(".player2-wins");
const scoreBoard = [0, 0];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  const cellId = parseInt(cell.getAttribute("data-cell"));
  cell.addEventListener("click", () => {
    if (gameActive && !gameBoard[cellId]) {
      gameBoard[cellId] = currentPlayer;
      cell.textContent = currentPlayer;
          cell.classList.add(currentPlayer === player1 ? 'player1' : 'player2');
        if (currentPlayer === player1) {
          player1Moves.push(cellId);
        } else {
          player2Moves.push(cellId);
        }
        playersturn.textContent = currentPlayer === player1 ? player2 : player1;
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    handleResultValidation();
  });
});

function handleResultValidation(player1Moves, player2Moves) {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondtion = winningConditions[i];
    const a = gameBoard[winCondtion[0]];
    const b = gameBoard[winCondtion[1]];
    const c = gameBoard[winCondtion[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    } else if (a === b && b === c) {
      roundWon = true;
      gameActive = false;
      scoreBoard[currentPlayer === player2 ? 0 : 1]++;
      player1wins.textContent = scoreBoard[0];
      player2wins.textContent = scoreBoard[1];
      message.classList.add(currentPlayer === player1 ? 'message-won-player1' : 'message-won-player2');
      message.textContent = `${
        currentPlayer === player1 ? player2 : player1
      } has won!`;
      break;
        } else if (a !== b && b !== c && c !== a && !gameBoard.includes("")) {
      roundWon = true;
      gameActive = false;
      message.textContent = "It's a tie!";
      break;
        }
  }
}

resetBtn.addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = player1;
  player1Moves.length = 0;
  player2Moves.length = 0;
  playersturn.textContent = player1;
  message.textContent = `It is ${currentPlayer}'s turn`;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
});
