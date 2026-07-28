// A-04  —  Palindrome Checker         🟡 Medium
// Concepts Used:  Strings · Reversal
// Scenario:  Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards (e.g. 'madam').
// If the input is not a string, return "Invalid".
// Expected Output:
//    isPalindrome('madam') → true
//    isPalindrome('hero')  → false

// Hints:
//   1.  Reverse the string using any method from Session 2
//   2.  Compare the reversed version to the original with ===

// Write your code here:

function isPalindrome(str) {
    const originalStrSplit = str.split('');
    const reversedSplitedStr = str.split('');
    reversedSplitedStr.reverse();
    let count = 0;
    for (let i = 0; i < originalStrSplit.length; i++) {
        if (originalStrSplit[i] === reversedSplitedStr[i]) {
            count++;
            // console.log("for loop er vitor if ",count,originalStrSplit[i],reversedSplitedStr[i]);
        } else {
            return false;
            // console.log("for loop er vitor else ",count,originalStrSplit[i],reversedSplitedStr[i])
        }
    }
    if (count === originalStrSplit.length) {
        return true;
    } else {
        return false;
    }
}
 console.log(isPalindrome("madam"));
 console.log(isPalindrome("hero"));
// const str = "madam";
// const splitStr = str.split('');
// const reversedStr = splitStr.reverse();
// console.log(splitStr);
// console.log(reversedStr);
// isPalindrome("hero");





