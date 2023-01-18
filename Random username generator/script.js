const suffixes = ["_123", "_cool", "_funny", "_nerd", "_pro"];
function generateUsername() {
  var prefix = document.getElementById("prefixInput").value;
  var randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  var username = prefix + randomNumber;
  document.getElementById("generatedUsername").innerHTML = "Your username: " + username;
}