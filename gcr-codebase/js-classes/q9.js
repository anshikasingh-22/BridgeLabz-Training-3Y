
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    }

    applyCoupon(coupon) {
        if (!/^(SAVE20|DISC10)$/.test(coupon)) {
            throw new Error("Invalid coupon code");
        }

        const discount = coupon === "SAVE20" ? 20 : 10;
        return this.getTotal() * (1 - discount / 100);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1000, 1);

console.log("Cart Items:", cart.items);
console.log("Total:", cart.getTotal());

try {
    const coupon = "SAVE20";
    const finalTotal = cart.applyCoupon(coupon);

    console.log("Coupon:", coupon);
    console.log("Final Total:", finalTotal);
} catch (error) {
    console.log("Error:", error.message);
}
