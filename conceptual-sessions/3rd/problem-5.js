// 5. Reverse a given string using the split() → reverse() → join() method.

const str = "Hello! I am Emon";
const splitedStr = str.split('').reverse().join('');
console.log(splitedStr);
const arr = [[1,2,3],[4,5],7,[3,4,7,2]];
const strArr = arr.join(',');
console.log(strArr);