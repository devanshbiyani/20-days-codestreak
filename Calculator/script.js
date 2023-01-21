var display = document.getElementById("display");
var currentNumber = "0";
var previousNumber = null;
var operator = null;

function addNumber(number) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  display.value = currentNumber;
  console.log("currentNumber: ", currentNumber);
}

function addDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
  }
  display.value = currentNumber;
  console.log("currentNumber: ", currentNumber);
}

function performOperation(newOperator) {
  if (previousNumber === null) {
    previousNumber = currentNumber;
  } else {
    calculate();
  }
  operator = newOperator;
  currentNumber = "0";
  console.log("previousNumber: ", previousNumber);
  console.log("operator: ", operator);
}

function calculate() {
  var result;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  currentNumber = result;
  display.value = currentNumber;
  console.log("result: ", result);
}

function clearDisplay() {
  currentNumber = "0";
  previousNumber = null;
  operator = null;
  display.value = currentNumber;
  console.log("currentNumber: ", currentNumber);
  console.log("previousNumber: ", previousNumber);
  console.log("operator: ", operator);
}
