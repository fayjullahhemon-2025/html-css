// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
// Input Output
// 1234   4321
// 7         7

// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(number){
    return Number(number.toString().split('').reverse().join(''));
}
console.log(reverseNumber(1234));
console.log(reverseNumber(7));

