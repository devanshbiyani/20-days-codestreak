const choices = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

rock.addEventListener('click', function() {
  play('rock');
});

paper.addEventListener('click', function() {
  play('paper');
});

scissors.addEventListener('click', function() {
  play('scissors');
});

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let message;
  if (userChoice === computerChoice) {
    message = 'Tie!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
             userChoice === 'paper' && computerChoice === 'rock' ||
             userChoice === 'scissors' && computerChoice === 'paper') {
    message = 'You win!';
  } else {
    message = 'You lose!';
  }
  result.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}. ${message}`;
}
