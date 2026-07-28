// A-02  —  Word Position Filter         🟡 Medium
// Concepts Used:  Strings · Loops · Modulus
// Scenario:  SnapText, a note-taking app, builds a quick preview of a caption by keeping only the words at even index positions (0, 2, 4...). Write a function filterEvenPositionWords(sentence) that returns the filtered sentence.
// Expected Output:
//    filterEvenPositionWords('The quick brown fox jumps')
//      → 'The brown jumps'

// Hints:
//   1.  split(' ') into an array of words
//   2.  Loop through the words and keep the ones where the index passes i % 2 === 0

// Write your code here:


function filterEvenPositionWords(sentence) {
    if (typeof sentence === 'string') {
        const splitedSentence = sentence.split(' ');
        const evenPositionWords = [];
        for (const word of splitedSentence) {
            if (splitedSentence.indexOf(word) % 2 === 0) {
                evenPositionWords.push(word);
            }
        }
        return evenPositionWords.join(' ');
    }
    else{
        return "invalid";
    }

}
console.log(filterEvenPositionWords('The quick brown fox jumps'));
console.log(filterEvenPositionWords(["hello"]));
console.log(filterEvenPositionWords(23));
console.log(filterEvenPositionWords(true));
console.log(filterEvenPositionWords(undefined));
console.log(filterEvenPositionWords(null));






