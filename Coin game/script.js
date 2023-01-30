const flipBtn = document.getElementById("flipBtn");
const heads = document.getElementById("heads");
const tails = document.getElementById("tails");
const result = document.getElementById("result");

flipBtn.addEventListener("click", function() {
  const flip = Math.random() < 0.5;

  heads.style.display = "none";
  tails.style.display = "none";

  if (flip) {
    heads.style.display = "block";
    result.textContent = "Heads!";
  } else {
    tails.style.display = "block";
    result.textContent = "Tails!";
  }
});
