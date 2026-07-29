// B-05  —  Count Even & Odd in an Array         🟡 Medium
// Concepts Used:  Arrays · Objects · Functions · Loops
// Scenario:  Write a function countEvenOdd(arr) that returns an object like { even: 3, odd: 2 } counting how many even and odd numbers are in the array.
// If the input isn't an array, return "Invalid".
// If the array contains any non-number values, return "Invalid".
// Expected Output:
//    countEvenOdd([1,2,3,4,5]) → { even: 2, odd: 3 }

// Hints:
//   1.  Start with an object { even: 0, odd: 0 }
//   2.  Inside the loop, increment result.even or result.odd based on % 2

// Write your code here:

function countEvenOdd(arr){
    let evenCount = 0;
    let oddCount = 0;
    if(Array.isArray(arr)){
        for(const num of arr){
            if(typeof num === 'number'){
                if(num%2===0){
                    evenCount++;
                }else{
                    oddCount++;
                }
            }else{
                return "invalid";
            }
        }
    }else{
        return "invalid";
    }
    return {even: evenCount , odd: oddCount};
}

console.log(countEvenOdd([1,2,3,4,5]));
console.log(countEvenOdd([1,2,3,4,"5"]));
console.log(countEvenOdd(3241));
console.log(countEvenOdd(true));
console.log(countEvenOdd(undefined));
console.log(countEvenOdd(countEvenOdd([1,2,3,4,5])));








