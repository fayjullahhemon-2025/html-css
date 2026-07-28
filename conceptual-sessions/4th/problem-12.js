// B-03  —  Reverse Each Word in a Sentence         🔴 Hard
// Concepts Used:  Strings · Arrays · Loops
// Scenario:  Write a function reverseEachWord(sentence) that reverses every individual word but keeps the word order the same.
// If the input is not a string, return "Invalid".
// Expected Output:
//    reverseEachWord('Hero is strong') → 'oreH si gnorts'

// Hints:
//   1.  split(' ') into an array of words
//   2.  Reverse each word individually, then join(' ') them back

// Write your code here:

function reverseEachWord(sentence){
    const splitedSentece = sentence.split(' ');
    // console.log(splitedSentece);
    const reversedWords = [];
    for(const word of splitedSentece){
        reversedWords.push(word.split('').reverse().join(''));
    }
    return reversedWords.join(' ');
}
console.log(reverseEachWord('Hero is strong'));
 
 
 
 
 
 
 
 

