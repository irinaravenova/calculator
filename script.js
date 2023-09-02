let valA = null;
let valB = null;
let operand = null;

let buttons = document.querySelectorAll('.buttons')
let displayValue = document.querySelector("#display-result")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.id == "clear" || event.target.id == "delete") {
            valA = 0;
            valB = null;
            operand = null
            displayValue.innerHTML = 0;
            console.log(valA, valB, operand)
        }
        else if (event.target.classList.contains("numbers")) {            
            if (valA == null) {
                valA = 0 + parseInt(event.target.innerHTML);
                displayValue.innerHTML = valA;
                console.log(valA)
            }
            else if (valA != null) {
                if (operand == null) {
                    valA = `${parseInt(valA + event.target.innerHTML)}`;
                    displayValue.innerHTML = valA;
                    console.log(valA)
                }
                else if (operand != null) {
                    if (valB == null) {
                        valB = parseInt(event.target.innerHTML);
                        displayValue.innerHTML = valB;
                        console.log(valA, operand, valB);
                    }
                    else if (valB != null) {
                        valB = `${parseInt(valB + event.target.innerHTML)}`;
                        displayValue.innerHTML = valB;
                        console.log(valA, operand, valB);
                    }
                }
            }
        }
        else if (event.target.classList.contains("operator")) {
            if (operand == null) {
                operand = event.target.innerHTML;
                console.log(valA, operand, valB)
            }
            if (valA == null && valB == null) {
                displayValue.innerHTML = 0;
            }
            else if (valA != null && valB == null) {
                operand = event.target.innerHTML;
                
            }








        }
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