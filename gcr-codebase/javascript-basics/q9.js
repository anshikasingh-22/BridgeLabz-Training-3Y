let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];

let answer;

switch (operator) {
    case "+":
        answer = number1 + number2;
        break;

    case "-":
        answer = number1 - number2;
        break;

    case "*":
        answer = number1 * number2;
        break;

    case "/":
        answer = (number1 / number2).toFixed(2);
        break;
}

console.log(`Question: ${number1} ${operator} ${number2}`);
console.log(`Correct Answer: ${answer}`);