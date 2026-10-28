
"use strict";

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
        result.textContent = "Enter a valid name";
    } else if (!emailPattern.test(email)) {
        result.textContent = "Enter a valid email";
    } else if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        result.textContent = "Seats must be between 1 and 10";
    } else {
        const booking = { name, email, seats };
        result.textContent = `Booking Confirmed! Name: ${booking.name}, Email: ${booking.email}, Seats: ${booking.seats}`;
    }
});
