
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("Number:", num, "Boolean:", bool, "String:", str);

    if (value === undefined || value === " " || !Number.isFinite(num)) {
        invalid.push(value);
        console.log("Invalid:", str);
    } else {
        valid.push(num);
    }
}

console.log("Valid numbers:", valid);
console.log("Invalid values:", invalid);
