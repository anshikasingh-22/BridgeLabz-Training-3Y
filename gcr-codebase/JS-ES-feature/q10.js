
"use strict";

function outer() {
    console.log(count);
    var count = 5;

    function inner() {
        console.log(count);
        var count = 10;
    }

    inner();
}

outer();

function outerWithArrow() {
    let count = 5;

    const inner = () => {
        console.log(count);
        let innerCount = 10;
        console.log(innerCount);
    };

    inner();
}

outerWithArrow();
