let num1 = '';
let num2 = '';
let operator = '';
let display = '';

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalBtn = document.getElementById("equal");
const acBtn = document.getElementById("all-clear");
const clearBtn = document.getElementById("clear");
const screen = document.getElementById('display');

function clear() {
    screen.textContent = screen.textContent
    .toString()
    .slice(0, -1);
    display = display.slice(0, -1);
}

function allClear() {
    screen.textContent = '';
    display = '';
}

function addNumber(num) {
    display += num; 
    show();
}

function setOperator(operate) {
    if (display !== '') {
        display += operate;
        show();
    }
}

function resetScreen() {
    screen.textContent = '';
}

function operation() {
    let inputSplit = display.substring(display.indexOf(0)).split(' ');
    num1 = inputSplit[0];
    num2 = inputSplit[2];
    operator = inputSplit[1];
    display = operate(operator,num1,num2);
    show();
}

function show() {
    screen.textContent = display;
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

function power(a, b) {
    return a ** b;
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
        case '^':
            return power(a,b);
        default:
            return null;
    }
}

// Event Listeners
numberButtons.forEach((button) =>
  button.addEventListener('click', () => addNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperator(button.textContent))
)

equalBtn.onclick = () => operation();
acBtn.onclick = () => allClear();
clearBtn.onclick = () => clear();