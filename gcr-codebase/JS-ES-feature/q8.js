
"use strict";

function demo(a, b) {
    let total = 10;
    console.log("Total:", total);
    console.log("Arguments:", a, b);
}

demo(5, 10);

const data = { total: 10 };
delete data.total;

console.log(data);
