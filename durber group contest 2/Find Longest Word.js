function findLongestWord(sentence) {
    let longestWord = '';
    let words = sentence.match(/[a-zA-Z0-9]+/g);
    if(!words){
        return "";
    }
    for(let word of words){
        if(word.length>longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("Hello world, how are you today?"))
console.log(findLongestWord("T"))