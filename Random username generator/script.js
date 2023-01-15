const suffixes = ["_123", "_cool", "_funny", "_nerd", "_pro"];

document.getElementById("generate-button").addEventListener("click", function() {
  const prefix = document.getElementById("username-prefix").value;
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const generatedUsername = prefix + suffix;
  document.getElementById("generated-username").innerHTML = generatedUsername;
});