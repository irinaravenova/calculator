let valA = null;
let valB = null;
let operand = null;

let buttons = document.querySelectorAll('.buttons')
let displayValue = document.querySelector("#display-result")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.id == "clear" || event.target.id == "delete") {
            valA = 0;
            valB = 0;
            displayValue.innerHTML = 0;
            console.log(valA, valB, operand)
        }
       // else if (event.target.classList.contains("numbers")) 


        // displayValue.innerHTML = number.textContent;
    })
})

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
        return add(a, b);
    }
    if (operator == "-") {
        return subtract(a, b);
    }
    if (operator == "*") {
        return multiply(a, b)
    }
    if (operator == "/") {
        return divide(a, b);
    }

    
};