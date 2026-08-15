"use strict";
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = (number) => {
    return number.filter(num => num % 2 === 0);
};
console.log(evenNumber(number));
