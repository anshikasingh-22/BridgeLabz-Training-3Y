
"use strict";

const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("phone"),
        document.getElementById("password")
    ];

    const patterns = [
        /^[A-Za-z ]+$/,
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        /^\d{10}$/,
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
    ];

    let errors = [];

    fields.forEach((field, index) => {
        if (!patterns[index].test(field.value.trim())) {
            field.style.border = "2px solid red";
            errors.push(field.placeholder + " is invalid");
        } else {
            field.style.border = "2px solid green";
        }
    });

    message.style.color = errors.length ? "red" : "green";
    message.textContent = errors.length ? errors.join(", ") : "Registration successful!";
});
