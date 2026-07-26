// problem 5 : reverse a string

function reverseStr(str){
    const strSplit = str.split('');
    let reverseString = [];
    for(const i of strSplit){
        reverseString = i + reverseString;
    }
    return reverseString;
}
console.log(reverseStr('JavaScript'));