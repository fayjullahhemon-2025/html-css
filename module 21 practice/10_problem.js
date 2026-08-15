"use strict";
const typeChecker = (num) => {
    return typeof num === 'string' ? num : typeof num;
};
console.log(typeChecker('Hello'));
console.log(typeChecker(2));
