// B-02  —  Running Total Generator         🟡 Medium
// Concepts Used:  Loops · Arrays
// Scenario:  ExpenseMate, a budgeting app, shows a running total next to each expense. Write a function runningTotal(amounts) that returns a new array where each element is the cumulative sum up to that point.
// Return "Invalid" 
// if input isn't an array 
// any value isn't a number
// Expected Output:
//    runningTotal([100, 50, 25]) → [100, 150, 175]

// Hints:
//   1.  Keep a variable that tracks the running sum so far
//   2.  For each amount, add it to the running sum and push the new sum into a result array

// Write your code here:


function runningTotal(amounts) {
    if (Array.isArray(amounts)) {
        let sum = 0;
        const returnArr = [];
        for (const amount of amounts) {
            if (typeof amount === 'number') {
                sum = sum + amount;
                returnArr.push(sum);
            }else{
               return "invalid";
                
            }
        }
        return returnArr;
    }else{
        return "invalid";
    }
}
console.log(runningTotal([100, 50, 25]));
console.log(runningTotal([100, "50", 25]));
console.log(runningTotal(150));






