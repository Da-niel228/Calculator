function calculate() {
    const inputNum1 = parseFloat(document.getElementById("num1").value);
    const inputNum2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;
 
    if (operator == "+") {
     result = inputNum1 + inputNum2;
    } else if (operator == "-") {
     result = inputNum1 - inputNum2;
    } else if (operator == "*") {
     result = inputNum1 * inputNum2;
    } else if (operator == "/") {
     result = inputNum1 / inputNum2;
    }
 
    document.getElementById("result").value = result;
   }