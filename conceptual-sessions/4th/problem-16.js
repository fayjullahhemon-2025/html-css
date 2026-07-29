// B-07  —  Character Frequency Counter         🔴 Hard
// Concepts Used:  Strings · Objects · Loops
// Scenario:  Write a function charFrequency(str) that returns an object showing how many times each character appears in the string.
// If the input is not a string, return "Invalid".
// Expected Output:
//    charFrequency('hero') → { h:1, e:1, r:1, o:1 }
//    charFrequency('hello') → { h:1, e:1, l:2, o:1 }

// Hints:
//   1.  Start with an empty object {}
//   2.  For each character, if it's already a key, increment it — otherwise set it to 1

// Write your code here:

function charFrequency(str){
    const obj = {};
    for(const character of str){
        // obj[character] = (obj[character] || 0)+1;
        if(obj[character]){ //check kortese object e ei character key ache kina
            obj[character]++; //paile 1 value baracche
        }else{
            obj[character]=1; // na pele 1 kore dicche
        }
    }
    return obj;
    
}
console.log(charFrequency('hero'));
console.log(charFrequency('hello'));
// charFrequency('hero');








