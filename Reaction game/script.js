const startButton = document.getElementById("start-button");
const timer = document.getElementById("timer");
let time = 0;
let running = false;

startButton.addEventListener("click", startGame);

function startGame() {
  if (running === true) {
    return;
  }
  running = true;
  startButton.innerHTML = "Click as fast as you can!";
  time = 0;
  timer.innerHTML = "Time: 0s";
  setTimeout(() => {
    running = false;
    startButton.innerHTML = "Start";
    alert("Your time is " + time + "s");
  }, 5000);
  startButton.addEventListener("click", clickHandler);
}

function clickHandler() {
  time += 0.1;
  timer.innerHTML = "Time: " + time.toFixed(1) + "s";
}
