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

console.log(cells);

cells.forEach((cell) => {
  const cellId = parseInt(cell.getAttribute("data-cell"));
  cell.addEventListener("click", () => {
    if (gameActive && !gameBoard[cellId]) {
      console.log(currentPlayer);
      gameBoard[cellId] = currentPlayer;
      cell.textContent = currentPlayer;
      if (currentPlayer === player1) {
        player1Moves.push(cellId);
      } else {
        player2Moves.push(cellId);
      }
      playersturn.textContent = currentPlayer === player1 ? player2 : player1;
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    handleResultValidation();
    console.log(player1Moves);
    console.log(player2Moves);
  });
});

function handleResultValidation(player1Moves, player2Moves) {
  let roundWon = false;
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
