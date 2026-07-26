// problem8: count words in a sentence

function countWords(str){
    const strSplit = str.split(' ');
    return strSplit.length;
}
const str = "Programming Hero";
console.log(countWords(str));