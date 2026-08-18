"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    id: 101,
    userName: "Fayjullah",
    salary: 30500
};
let employee2 = {
    id: "201",
    userName: "Emon",
};
;
const multiple = (x, y) => x * y;
console.log(multiple(2, 3));
const addition = (...number) => number.reduce((acc, currentVal) => acc + currentVal, 0);
console.log(addition(3, 2, 5));
