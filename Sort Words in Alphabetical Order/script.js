function sortWords() {
  var words = document.getElementById("words").value;
  var sortedWords = words.split(",").sort();
  document.getElementById("sortedWords").innerHTML = sortedWords.join(", ");
}
