let refreshOutput = false;

// function to display the output
function displayOutput(valueFromUser) {
  if (refreshOutput) {
    clearScreen();
    refreshOutput = false;
  }
  document.getElementById("output-value").innerHTML += valueFromUser;
}

// funciton to calculate the expression
function calculate() {
  const expressionToEvaluate =
    document.getElementById("output-value").innerHTML;

  try {
    const evaluatedMath = eval(expressionToEvaluate);
    document.getElementById("output-value").innerHTML = evaluatedMath;
    refreshOutput = true;
  } catch (err) {
    alert("Invalid Expression");
    clearScreen();
  }
}

// function to clear the screen
function clearScreen() {
  document.getElementById("output-value").innerHTML = "";
}
