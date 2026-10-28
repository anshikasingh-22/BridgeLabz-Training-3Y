
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const t = transactions[i];

        if (t === null) throw new Error("Null entry");
        if (t.id === undefined || t.amount === undefined) {
            throw new Error("Missing amount or id");
        }
        if (t.amount < 0) throw new Error("Negative amount");

        valid.push(t);
        console.log("Valid transaction:", t.id);
    } catch (error) {
        invalid.push({ index: i + 1, error: error.message });
        console.log("Error:", error.message);
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Success:", valid.length);
console.log("Failed:", invalid.length);
