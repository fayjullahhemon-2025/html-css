"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add; //function signature
add = (num1, num2) => {
    return num1 + num2;
};
// console.log(add("2",1));//error
// console.log(add(2,1));
// function multiply(a:number,b:number):number{
//     return a*b;
// }
let voidReturnedFunc;
let neverReturnedFunc;
// function type with callback 
let processData;
function myFunc(callback, b) {
    callback(100);
    return 23;
}
function calculate(a, b, operator) {
    return operator(a, b);
}
let result = calculate(10, 5, (c, d) => c + d); //(c,d)=>c+d hocche function
const userInfo = (name, age) => {
    console.log(name, age);
};
const userInfoDisplay = (name, age) => {
    console.log(name, age);
};
userInfoDisplay("Emon", 26);
