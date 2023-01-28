let word = "javascript";
let wordView = document.getElementById("wordView");
let message = document.getElementById("message");
let remaining = document.getElementById("remaining");
let wrongGuesses = 0;

let wordString = "";
for (let i = 0; i < word.length; i++) {
  wordString += "_";
}
wordView.textContent = wordString;

remaining.textContent = "Remaining Guesses: " + (6 - wrongGuesses);

function guessLetter() {
  let input = document.getElementById("guessInput");
  let guess = input.value;
  input.value = "";

  if (word.includes(guess)) {
    let wordArray = wordString.split("");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        wordArray[i] = guess;
      }
    }
    wordString = wordArray.join("");
    wordView.textContent = wordString;
  } else {
    wrongGuesses++;
    remaining.textContent = "Remaining Guesses: " + (6 - wrongGuesses);
  }

  if (wordString === word) {
    message.textContent = "You win!";
  } else if (wrongGuesses === 6) {
    message.textContent = "You lose. The word was " + word + ".";
  }
}
