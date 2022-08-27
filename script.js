let num1 = '';
let num2 = '';
let operator = '';
let display = [];
let operation = [];

function clear() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1)
}

function allClear() {
    return true;
}

function operatorOff() {
    let aButton = document.getElementById('add');
    let sButton = document.getElementById('subtract');
    let mButton = document.getElementById('multiply');
    let dButton = document.getElementById('divide');
    aButton.disabled = true;
    sButton.disabled = true;
    mButton.disabled = true;
    dButton.disabled = true;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator,a,b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b); 
        case '÷':
            if (a === 0 || b === 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}
console.log(add(4,2));
console.log(subtract(4,2));
console.log(multiply(4,2));
console.log(divide(4,2));