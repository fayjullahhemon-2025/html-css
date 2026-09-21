function titleCaseSentence(str) {
    const splitedStr = str.toLowerCase().trim().split(/\s+/);
    const result = [];
    if (str === "") {
        return "";
    }
    for (let i = 0; i < splitedStr.length; i++) {
        const word = splitedStr[i];
        const newWord = word[0].toUpperCase() + word.slice(1);
        result.push(newWord);
    }
    return result.join(' ');
}
console.log(titleCaseSentence("hello world"));


console.log(titleCaseSentence("a short sentence"));


console.log(titleCaseSentence("  hello   world  "));


console.log(titleCaseSentence("HELLO   WORLD"));
