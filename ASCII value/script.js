function findASCII() {
  var character = document.getElementById("character").value;
  var asciiValue = character.charCodeAt(0);
  document.getElementById("output").innerHTML = "The ASCII value of '" + character + "' is " + asciiValue + ".";
}
