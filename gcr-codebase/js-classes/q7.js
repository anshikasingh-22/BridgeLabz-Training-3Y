
"use strict";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userPattern = /^.{5,}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!userPattern.test(username)) {
        message.textContent = "Username must have at least 5 characters";
        message.style.color = "red";
    } else if (!passPattern.test(password)) {
        message.textContent = "Password needs 8 characters, uppercase, lowercase, number and special character";
        message.style.color = "red";
    } else {
        message.textContent = "Login validation successful";
        message.style.color = "green";
    }
});
