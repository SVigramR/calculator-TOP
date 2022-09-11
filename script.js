let num1 = '';
let num2 = '';
let operator = '';
let display = '';
let operation = [];

const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const equalBtn = document.getElementById("equal");
const acBtn = document.getElementById("all-clear");
const clearBtn = document.getElementById("clear");

function clear() {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
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

window.onload = () => {
    operatorOff();
}