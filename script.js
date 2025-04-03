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

function operate(num1, num2, operator) {
    num1 = convertStringToNum(num1);
    num2 = convertStringToNum(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "X":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function convertStringToNum (str) {
    return +str;
}

function deleteDigit(num) {
    if (num.length > 1) {
        num = num.substring(0, num.length - 1);;
        document.querySelector("#screen").textContent = num;
        return num;
    } else {
        num = 0;
        document.querySelector("#screen").textContent = num;
        return num;
    }
}

function addDigit(num, digit) {
    return num += digit;
}

function checkIfUndefined(input) {
    return typeof input === 'undefined';
}

let num1, num2, operator;

const calculatorButtons = document.querySelectorAll(".calc-button");

calculatorButtons.forEach(button => button.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = "White";
    if (isNaN(+e.target.textContent)) {
        if (e.target.textContent === "Clear") {
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            document.querySelector("#screen").textContent = 0;
        }
        if (e.target.textContent === "C") {
            if (!checkIfUndefined(num2)) {
                num2 = deleteDigit(num2);
            } else if (!checkIfUndefined(num1)) {
                num1 = deleteDigit(num1);
            }
        }
        if (e.target.textContent === ".") {
            if (checkIfUndefined(num1) && checkIfUndefined(num2)) {
                num1 = "0.";
                document.querySelector("#screen").textContent = num1;
            } else if (!checkIfUndefined(num2)) {
                num2 += ".";
                document.querySelector("#screen").textContent = num2;
            } else if (!checkIfUndefined(num1)) {
                num1 += ".";
                document.querySelector("#screen").textContent = num1;
            }
        }
        if ("+/X=".includes(e.target.textContent)) {
            if (checkIfUndefined(num1) && checkIfUndefined(num2)) {
                num1 = 0;
                if (e.target.textContent !== "=") operator = e.target.textContent;
            } else if (!checkIfUndefined(num2)) {
                num1 = operate(num1, num2, operator);
                document.querySelector("#screen").textContent = num1;
                num2 = undefined;
                if(e.target.textContent === "=") {
                    operator = undefined;
                } else {
                    operator = e.target.textContent;
                }
            } else if (!checkIfUndefined(num1)) {
                if(e.target.textContent !== "=") operator = e.target.textContent;
            }
        }
    } else {
        if (checkIfUndefined(num1) && checkIfUndefined(num2)) {
            num1 = e.target.textContent;
            document.querySelector("#screen").textContent = num1;
        } else if (!checkIfUndefined(num2)) {
            num2 = addDigit(num2, e.target.textContent);
            document.querySelector("#screen").textContent = num1;
        } else if (!checkIfUndefined(num1)) {
            if (checkIfUndefined(operator)) {
                num1 = addDigit(num1, e.target.textContent);
                document.querySelector("#screen").textContent = num1;
            } else {
                num2 = e.target.textContent;
                document.querySelector("#screen").textContent = num2;
            }
        }
    }
}));

calculatorButtons.forEach(button => button.addEventListener("mouseup", (e) => {
    e.target.removeAttribute("style");
}));

calculatorButtons.forEach(button => button.addEventListener("mouseout", (e) => {
    if (e.target.hasAttribute("style")) {
        e.target.removeAttribute("style");
    }
}));