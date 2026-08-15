"use strict";
const cart = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 850,
        quantity: 2,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 3200,
        quantity: 1,
        category: "Electronics",
        discount: 10
    },
    {
        id: 3,
        name: "USB-C Cable",
        price: 450,
        quantity: 3,
        category: "Accessories"
    },
    {
        id: 4,
        name: "Laptop Stand",
        price: 1800,
        quantity: 1,
        category: "Accessories",
        discount: 15
    },
    {
        id: 5,
        name: "Notebook",
        price: 250,
        quantity: 4,
        category: "Stationery"
    }
];
const cartInfo = (cart) => {
    return cart;
};
console.log(cartInfo(cart));
