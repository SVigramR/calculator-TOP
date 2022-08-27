let num1 = '';
let num2 = '';
let operator = '';
let display = [];
let operation = [];

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