let count = 0;

function increment() {
    count++;
    console.log(count);
}

function decrement() {
    count--;
    console.log(count);
}

function counterSimulation() {
    let count = 10;

    function showCount() {
        count++;
        console.log(`Local Count: ${count}`);
    }

    showCount();
    console.log(`Outer Count: ${count}`);
}

increment();
increment();
decrement();

console.log(`Global Count: ${count}`);

counterSimulation();

console.log(`Global Count: ${count}`);