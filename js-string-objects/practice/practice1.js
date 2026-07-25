// Task 1.1 — Spot the Difference
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];
// Log str.length and arr.length. What do you notice?
// Try str[0] and arr[0]. Do both work the same way?
// Try str.push("!") — what happens? Why does this fail for strings but not arrays?
// Task 1.2 — Convert Between Them
// Convert the string "JavaScript" into an array of characters.
// Convert the array ["c", "a", "t"] back into a single string "cat".

console.log("Task 1.1");
let str = "Hello";
let arr = ["H","e","l","l","o"];
console.log(str.length);//5
console.log(arr.length);//5

console.log(str[0]);//'h'
console.log(arr[0]);//'h'
console.log("Task 1.2");
// str.push("!");//error. because string is immutable
arr.push("!");//! added as last element
console.log("Task 1.2");
const str2 = "JavaScript";
const characterArray = str2.split('');
console.log(characterArray);

const arr2 = ["c", "a", "t"];
const arr3 = arr2.join('');
console.log(arr3);