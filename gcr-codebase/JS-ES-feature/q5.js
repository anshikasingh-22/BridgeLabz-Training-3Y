
"use strict";

var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

const arrowAnnounce = () => console.log("Game started");
const arrowStartGame = () => console.log(status);

arrowAnnounce();
arrowStartGame();
