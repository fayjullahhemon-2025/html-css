// Task 3.1 — Slicing Strings
// let sentence = "Learning JavaScript is fun!";
// Get just the word "Learning" using .slice().
// Get the last 4 characters ("fun!") using .slice() with a negative index.
console.log("Task 3.1");
let sentence = "Learning JavaScript is fun!";
console.log(sentence.slice(0,8));//Learning
console.log(sentence.slice(-4));//fun!

// Task 3.2 — Combine Strings
// Use .concat() to join "Hello" and "World" into "Hello World".
// Use + and template literals to do the same thing. Compare all three approaches.

console.log("Task 3.2");
const str = "Hello";
console.log(str.concat(" world"));

console.log(`${str} world`);
console.log(`${str} `+ "world");