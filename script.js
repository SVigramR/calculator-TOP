let battery = true;
let num1 = '';
let num2 = '';
let operator = '';
let display = '';

// const powerBtn = document.getElementById('on-off')
// let allBtn = document.querySelectorAll('.btn').disabled = true;
const numberBtns = document.querySelectorAll('[data-number]')
const operatorBtns = document.querySelectorAll('[data-operator]')
const equalBtn = document.getElementById("equal");
const dotBtn = document.getElementById("dot");
const acBtn = document.getElementById("all-clear");
const clearBtn = document.getElementById("clear");
const screen = document.getElementById('display');

function clear() {
    if (display !== '') display = display.slice(0, -1); 
    if (display.endsWith(operator) && operator !== '') {
        display = display.slice(0, -2);
        operator = ''; 
    }
    splitNumber();
    show()
}

function allClear() {
    screen.textContent = '', display = '', operator = '', num1 = '', num2 = '';
}

function splitNumber() {
    let inputSplit = display.substring(display.indexOf(0)).split(' ');
    num1 = inputSplit[0], num2 = inputSplit[2];
}

function addNumber(num) {
    display += num; 
    splitNumber();
    show();
}

function setOperator(operate) {
    // const symbols = ['+', '-', '*', '÷', '^']
    if (display !== '' && !display.toString().includes(operate) && operator === '') {
        display += operate;
        operator += operate.trim();
    } 
    show();
}

function addPoint() {
    if (display === '' || display.endsWith(' ')) display += '0';
    if (display !== '' && !num1.includes('.') || !num2.includes('.')) display+='.';
    splitNumber();
    show();
}

function operation() {
    display = operate(operator,num1,num2);
    num1 = String(display);
    operator = '', num2 = '';
}

function equal() {
    if (num1 !== '' && num2 === '' && operator !== '') display = display;
    if (num1 !== '' && num2 !== '' && operator !== '') operation();
    show()
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
            if (a === 0 || b === 0) return display = "Can't divide by 0";
            else return divide(a,b);
        case '^':
            return power(a,b);
        default:
            return null;
    }
}

// Event Listeners
numberBtns.forEach((button) =>
  button.addEventListener('click', () => addNumber(button.textContent))
)

operatorBtns.forEach((button) =>
  button.addEventListener('click', () => setOperator(button.textContent))
)

equalBtn.onclick = () => equal();
dotBtn.onclick = () => addPoint();
acBtn.onclick = () => allClear();
clearBtn.onclick = () => clear();