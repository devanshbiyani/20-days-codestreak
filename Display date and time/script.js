var clock = document.getElementById("clock");

function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  var currentDate = currentTime.toLocaleDateString();

  clock.innerHTML = currentDate + "<br>" + currentHours + ":" + currentMinutes + ":" + currentSeconds;
}

setInterval(updateClock, 1000);
