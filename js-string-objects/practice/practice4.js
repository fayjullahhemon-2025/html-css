// Task 4.1 — Three Reversal Methods
// Write a function reverseString(str) three different ways:
// Using .split(""), .reverse(), and .join("")
// Using a for loop that builds the reversed string character by character


// Test all three with "JavaScript" → should return "tpircSavaJ".
// Bonus: Which method do you think is fastest? 

console.log("Task 4.1 — Three Reversal Methods");

function reverseStr(way,str){
    if(way===1){
        const strArr = str.split('');
        const reversedStrArr =  strArr.reverse();
        return reversedStrArr.join('');
    }else if(way === 2){
        const strSplit = str.split('');
        let returnedReverseStr = [];
        for(const i of strSplit){
            returnedReverseStr = i + returnedReverseStr;
        }
        return returnedReverseStr;
    }else{
        const strSplit = str.split('');
        const returnedReverseStr = [];
        for(let i = strSplit.length-1;i>=0;i--){
            returnedReverseStr.push(strSplit[i]);
        }
        return returnedReverseStr.join('');
    }
}

console.log(reverseStr(1,"JavaScript"));
console.log(reverseStr(2,"JavaScript"));
console.log(reverseStr(3,"JavaScript"));