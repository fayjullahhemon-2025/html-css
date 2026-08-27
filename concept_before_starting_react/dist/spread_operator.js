"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//spread operator
const arr = [1, 2, 3, 4];
// const newArr = arr;
const newArr = [...arr]; //shallow copy
newArr.push(5);
newArr.push(6);
// console.log(arr);
const user = {
    name: "Emon",
    age: 26,
    city: "Dhaka"
};
// const newUser = user;
const newUser = { ...user, image: "url---" }; //spread operator
// newUser.image = 'url---';
console.log(newUser);
console.log("Original obj", user);
//# sourceMappingURL=spread_operator.js.map