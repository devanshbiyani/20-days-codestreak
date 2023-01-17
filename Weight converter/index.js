function convertWeight(event) {
  event.preventDefault();
  var weightInput = document.getElementById("weightInput").value;
  var unitSelect = document.getElementById("unitSelect").value;
  var output = document.getElementById("output");
  
  if (unitSelect == "kg") {
    output.innerHTML = weightInput + " kilograms is " + (weightInput * 2.20462) + " pounds.";
  } else if (unitSelect == "lbs") {
    output.innerHTML = weightInput + " pounds is " + (weightInput * 0.453592) + " kilograms.";
  }
}
