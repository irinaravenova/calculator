let valA = null;
let valB = null;
let operand = null;

let buttons = document.querySelectorAll('.buttons')
let displayValue = document.querySelector("#display-result")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.id == "clear") {
            valA = 0;
            valB = null;
            operand = null
            displayValue.innerHTML = 0;
            console.log(valA, valB, operand)
        }
        else if (event.target.id == "delete") {
            if (valA != null && valB == null) {
                if (valA.length > 1) {
                    valA = valA.slice(0, -1);
                    displayValue.innerHTML = valA;
                    console.log(valA, typeof valA)
                }
                else if (valA.length == 1) {
                    valA = 0;
                    displayValue.innerHTML = valA;
                    console.log(valA, typeof valA)
                }
            }
            else if (operand != null && valB != null) {
                if (String(valB).length > 1) {
                    valB = String(valB).slice(0, -1);
                    displayValue.innerHTML = (valB);
                    console.log(valA, valB)
                }
                else if (String(valB).length == 1) {
                    valB = 0;
                    displayValue.innerHTML = String(valB);
                    console.log(valA, (valB))
                }            
            }
            }
        
        else if (event.target.classList.contains("numbers")) {            
            if (valA == null) {
                valA = 0 + parseFloat(event.target.innerHTML);
                displayValue.innerHTML = valA;
                console.log(valA)
            }
            else if (valA != null) {
                if (operand == null) {
                    valA = `${parseFloat(valA + event.target.innerHTML)}`;
                    displayValue.innerHTML = valA;
                    console.log(valA)
                }
                else if (operand != null) {
                    if (valB == null) {
                        valB = parseFloat(event.target.innerHTML);
                        displayValue.innerHTML = valB;
                        console.log(valA, operand, valB);
                    }
                    else if (valB != null) {
                        valB = parseFloat(`${parseFloat(valB + event.target.innerHTML)}`);
                        displayValue.innerHTML = valB;
                        console.log(valA, operand, valB);
                    }
                }
            }
            else if (valB != null) {
                valB = `${parseFloat(valB + event.target.innerHTML)}`;
                displayValue.innerHTML = valB;
                console.log(valA, operand, valB);
            }
        }

        else if (event.target.classList.contains("operator")) {
            if (valA != null && valB != null) {
                    if (operand == null) {
                        let result = operate(valA, valB, operand);
                        displayValue.innerHTML = result;
                        valA = result;
                        valB = null;
                        console.log(valA, valB, operand, result)
                    }
                    else if (operand != null) {
                        let result = operate(valA, valB, operand);
                        displayValue.innerHTML = result;
                        valA = result;
                        valB = null;
                        operand = event.target.innerHTML;
                        console.log(valA, valB, operand, result)
                    }
            }
            else if (operand == null && valA == null && valB == null) {
                console.log(valA, operand, valB)
            }
            else if (valA != null && valB == null) {
                operand = event.target.innerHTML;
                console.log(valA, operand, valB);
            }
        }

        else if (event.target.id == "equals") {
            if (valA != null && valB != null && operand != null) {
                let result = operate(valA, valB, operand);
                if (!(typeof result === 'string')) {
                    displayValue.innerHTML = result;
                    valA = result;
                    valB = null;
                    console.log(valA, valB, operand, result)
                }
                else {
                    valA = null;
                    valB = null;
                    console.log(valA, valB, operand, result)
                }
            }
        }
        
    }
)});


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
};


function operate(a, b, operator) {
    if (operator == "+") {
        console.log(add(a,b));
        return add(a, b);
    }
    if (operator == "-") {
        return subtract(a, b);
    }
    if (operator == "*") {
        return multiply(a, b)
    }
    if (operator == "/") {
        if (b == 0) {
            valA = null;
            valB = null;
            operand = null;
            return displayValue.innerHTML = "NOT ON MY WATCH";
        }
        else {
            return divide(a, b);
        }
    }
}