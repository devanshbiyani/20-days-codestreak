var board = ["", "", "", "", "", "", "", "", ""];
var turn = "X";

document.getElementById("board").addEventListener("click", function(event) {
  var cell = event.target;
  var cellId = cell.getAttribute("id");
  if (!cellId) {
    return;
  }
  var cellIndex = cellId.substring(5, 6) - 1;
  if(cellIndex <0 || cellIndex > 8) return;
  if (!board) {
    return;
  }
  
  if (cell.innerHTML === "") {
    cell.innerHTML = turn;
    board[cellIndex] = turn;
    checkForWinner();
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
});

document.getElementById("reset-button").addEventListener("click", function() {
  if (!board) {
    return;
  }
  board = ["", "", "", "", "", "", "", "", ""];
  if (!turn) {
    return;
  }
  turn = "X";
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
});

function checkForWinner() {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (var i = 0; i < winningCombinations.length; i++) {
    var combination = winningCombinations[i];
    if (board[combination[0]] === board[combination[1]] &&
        board[combination[1]] === board[combination[2]] &&
        board[combination[0]] !== "") {
      alert(board[combination[0]] + " wins!");
      return;
    }
  }
}
