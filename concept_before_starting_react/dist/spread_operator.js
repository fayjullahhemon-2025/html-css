"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//spread operator
const arr = [1, 2, 3, 4];
// const newArr = arr;
const newArr = [...arr]; //shallow copy
newArr.push(5);
newArr.push(6);
console.log(arr);
//# sourceMappingURL=spread_operator.js.map