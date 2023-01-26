function startTimer() {
    // Get the input value
    let minutes = document.getElementById("inputMinutes").value;
    let seconds = minutes * 60;
  
    // Update the timer every 1 second
    let interval = setInterval(() => {
      seconds--;
  
      // Update the HTML
      document.getElementById("minutes").innerHTML = Math.floor(seconds / 60);
      document.getElementById("seconds").innerHTML = seconds % 60;
  
      // Stop the timer when it reaches 0
      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  