
"use strict";

const num1 = 25;
const num2 = 5;
const operation = "add";

try {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "divide":
            if (num2 === 0) throw new Error("Cannot divide by zero");
            result = num1 / num2;
            break;
        case "power":
            result = num1 ** num2;
            break;
        case "root":
            if (num1 < 0) throw new Error("Negative number");
            result = Math.sqrt(num1);
            break;
        case "subtract":
            result = num1 - num2;
            break;
        default:
            throw new Error("InvalidOperationError");
    }

    console.log("Operation:", operation);
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}
