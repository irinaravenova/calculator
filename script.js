let a = document.querySelector('.firstNumber')
let b = document.querySelector('.secondNumber')
let operator = document.querySelector('.operator')


function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

function operate(a, b, operator) {
    if (operator == "+") {
        add(a, b);
    }
    if (operator == "-") {
        subtract(a, b);
    }
    if (operator == "*") {
        multiply(a, b)
    }
    if (operator == "/") {
        divide(a, b);
    }


};