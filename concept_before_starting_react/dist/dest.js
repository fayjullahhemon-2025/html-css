"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//destructuring
const user = {
    name: "Emon",
    age: 26,
    city: "Dhaka"
};
const name = user.name;
// const age = user.age;
// const city = user.city;
const { name: userName, age, city } = user; //destructuring
console.log(userName);
console.log(age);
console.log(city);
console.log(name);
//# sourceMappingURL=dest.js.map