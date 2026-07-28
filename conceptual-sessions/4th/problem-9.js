// A-06  —  Remove Duplicate Values         🟡 Medium
// Concepts Used:  Arrays · Loops · includes()
// Scenario:  Write a function removeDuplicates(arr) that returns a new array with only unique values, preserving order.
// If the input is not an array, return "Invalid".
// Expected Output:
//    removeDuplicates([1,2,2,3,4,4,5]) → [1, 2, 3, 4, 5]

// Hints:
//   1.  Create an empty result array
//   2.  For each item, only push it if the result array doesn't already includes() it

// Write your code here:
 
 
 
 function removeDuplicates(arr){
    if(Array.isArray(arr)===true){
        const uniqueArray = [];
        for(const num of arr){
            if(uniqueArray.includes(num)){
                continue;
            }else{
                uniqueArray.push(num);
            }
        }
        return uniqueArray;
    }else{
        return "invalid";
    }
 }
 
 console.log(removeDuplicates([1,2,2,3,4,4,5]));
 console.log(removeDuplicates(4));
 console.log(removeDuplicates("Hello"));
 console.log(removeDuplicates(["hello","hello","I","am","am","Emon",2,3,4,4]));
 
 

