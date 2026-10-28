
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const adults = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(data.age);

        if (!Number.isFinite(age)) throw new Error("Invalid age");

        const user = { user: data.user, age: age };
        cleanData.push(user);

        if (age >= 18) adults.push(user);
    } catch (error) {
        errors.push({ line: i + 1, message: error.message });
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Adults:", adults);
