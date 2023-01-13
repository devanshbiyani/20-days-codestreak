function countCharacters() {
  var input = document.getElementById("user-input").value;
  var charCount = input.length;
  document.getElementById("char-count").innerHTML = charCount;
}