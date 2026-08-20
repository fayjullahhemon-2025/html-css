"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = [
    {
        name: "Burger",
        price: 250
    },
    {
        name: "Fries",
        price: 90
    },
    {
        name: "Soda",
        price: 60
    }
];
function calculateOrderTotal(items) {
    return items.reduce((acc, curVal) => acc + curVal.price, 0);
}
console.log(calculateOrderTotal(items));
