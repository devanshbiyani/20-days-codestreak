function rollDice() {
    var diceImage = document.getElementById("dice-image");
    var roll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = "dice" + roll + ".png";
  }
  