const digits = document.querySelector(".digits");
const operations = document.querySelector(".operations");
const AC = document.querySelector(".modifier");
const total = document.querySelector("#total");

digits.addEventListener("click", buttonHandler);
operations.addEventListener("click", operationHandler);
AC.addEventListener("click", ACHandler)
const sub = {
  firstInput: "",
  secondInput: "",
  operator: "",
}
let result;

function buttonHandler(e) {
  if (!sub.operator) {
    if (!sub.firstInput || sub.firstInput.length < 3) {
      sub.firstInput += e.target.innerText;
      total.innerText = sub.firstInput;
    }
    
  } else if (sub.operator) {
    if (!sub.secondInput || sub.secondInput.length < 3) {
      sub.secondInput += e.target.innerText;
      total.innerText = sub.firstInput + sub.operator + sub.secondInput;
    }
    
  }

}

function operationHandler(e) {
  const operator = e.target.innerText;
  if (operator !== "=") {
    sub.operator = operator;
    total.innerText+= sub.operator;
  } else {
    switch (sub.operator) {
      case "+" :
        result = parseInt(sub.firstInput) + parseInt(sub.secondInput);
        break;
      case "-" :
        result = parseInt(sub.firstInput) - parseInt(sub.secondInput);
        break;
      case "X" :
        result = parseInt(sub.firstInput) * parseInt(sub.secondInput);
        break;
      case "/" :
        result = parseInt(sub.firstInput) / parseInt(sub.secondInput);
        result = Math.floor(result);
        break;
    }
    total.innerText = result;
  }
  
}

function ACHandler(e) {
  sub.firstInput = "";
  sub.secondInput = "";
  sub.operator = "";
  total.innerText = 0;
}