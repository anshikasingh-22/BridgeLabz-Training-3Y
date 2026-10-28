
"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const form = document.getElementById("userForm");
const output = document.getElementById("output");

function displayUser() {
    output.textContent = JSON.stringify(user);
}

form.addEventListener("input", function() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);
    displayUser();
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    displayUser();
});

displayUser();
