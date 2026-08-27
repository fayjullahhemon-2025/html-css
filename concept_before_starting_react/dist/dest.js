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
// console.log(userName);
// console.log(age);
// console.log(city);
// console.log(name);
const arr = [10, 20, 30];
// const first = arr[0];
// const second = arr[1];
const [first, second] = arr;
function num() {
    return [1, 2, 3, 4];
}
const [one, two] = num();
console.log(one, two);
//# sourceMappingURL=dest.js.map