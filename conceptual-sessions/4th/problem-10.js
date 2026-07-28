// B-01  —  Sum of Digits         🟢 Easy
// Concepts Used:  Loops · Modulus
// Scenario:  Write a function sumDigits(num) that adds up all the individual digits of a number.
// If the input is not a number, return "Invalid".
// Expected Output:
//    sumDigits(1234) → 10   (1+2+3+4)

// Hints:
//   1.  Use % 10 to get the last digit, then Math.floor(num / 10) to remove it
//   2.  Repeat in a while loop until num becomes 0

// Write your code here:


function sumDigits(num){
     if(typeof num === 'number'){
        let digit = 0;
        let sumOfDigit = 0;
        while(Math.floor(num/10!==0)){
            digit = num%10;
            sumOfDigit += digit;
            num = Math.floor(num/10);
        }
        return sumOfDigit;
     }else{
        return "invalid";
     }
}
console.log(sumDigits(1234));
// console.log(Math.floor(1234/10));






