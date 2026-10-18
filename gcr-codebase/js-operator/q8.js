const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const discountedCart = cart.map(product => {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    return {
        item: product.item,
        price: product.price,
        finalPrice: product.price - product.price * discount / 100
    };
});

let subtotal = discountedCart.reduce(
    (total, product) => total + product.finalPrice, 0
);

let extraDiscount = subtotal > 50000 ? 5 : 0;
let finalTotal = subtotal - subtotal * extraDiscount / 100;

console.table(discountedCart);
console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);
console.log(`Extra Discount: ${extraDiscount}%`);
console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);