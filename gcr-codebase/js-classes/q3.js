
"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log("Book is already issued");
        } else {
            this.isIssued = true;
            console.log(this.title, "issued successfully");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title, "returned successfully");
    }
}

const books = [
    new Book("JavaScript", "John", "101"),
    new Book("Python", "Alex", "102"),
    new Book("HTML", "Sam", "103")
];

function showAvailableBooks() {
    console.log("Available books:");
    books.filter(book => !book.isIssued)
         .forEach(book => console.log(book.title, book.ISBN));
}

function issueByISBN(ISBN) {
    const book = books.find(book => book.ISBN === ISBN);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found");
    }
}

showAvailableBooks();
issueByISBN("102");
showAvailableBooks();
