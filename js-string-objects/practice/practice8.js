// Task 8.1 — Loop Through Properties
// let scores = { math: 90, science: 85, art: 95 };
// Use a for...in loop to log each key and value like: math: 90.
// Calculate the average of all values in the loop.

console.log("Task 8.1 — Loop Through Properties");

let scores = {
    math: 90,
    science: 85,
    art: 95
};
let sum = 0;
let avg = 0;
for(const key in scores){
    sum = sum + scores[key];
    console.log(key , scores[key]);
    avg = sum/3;

}
console.log(avg);