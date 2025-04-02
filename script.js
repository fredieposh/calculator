function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);   
    }
}

const calculatorButtons = document.querySelectorAll(".calc-button");

calculatorButtons.forEach(button => button.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = "White";
    
   }));

calculatorButtons.forEach(button => button.addEventListener("mouseup", (e) => {
    e.target.removeAttribute("style");
   }));

calculatorButtons.forEach(button => button.addEventListener("mouseout", (e) => {
    if(e.target.hasAttribute("style")) {
        e.target.removeAttribute("style");
    }
   }));



let num1, num2, operator;
