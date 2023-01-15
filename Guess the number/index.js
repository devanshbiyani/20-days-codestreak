var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  var userGuess = document.getElementById("guessField").value;
  if (userGuess == randomNumber) {
    document.getElementById("result").innerHTML = "Congratulations! You guessed the number!";
  } else if (userGuess > randomNumber) {
    document.getElementById("result").innerHTML = "Too high! Try again.";
  } else {
    document.getElementById("result").innerHTML = "Too low! Try again.";
  }
}