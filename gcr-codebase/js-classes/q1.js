
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    display() {
        return `${this.name} | ${this.category} | ₹${this.price}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Phone", 20000, "Electronics"),
    new Product(3, "Shoes", 1500, "Fashion"),
    new Product(4, "Pen", 50, "Stationery")
];

products[0].applyDiscount(10);

products.forEach(product => console.log(product.display()));

const expensive = products.filter(product => product.price > 1000);

console.log("Products above ₹1000:");
expensive.forEach(product => console.log(product.display()));
