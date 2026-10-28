
"use strict";

const input = typeof prompt === "function" ? prompt("Enter height:") : "";
const height = Number(input) > 0 && Number.isInteger(Number(input))
    ? Number(input)
    : 5;

for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}
