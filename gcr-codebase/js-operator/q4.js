let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
let passed = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Passed Students: ${passed}`);