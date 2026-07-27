


function countVowels(str){
    const strToLower = str.toLowerCase();
    let count = 0;
    for(const character of strToLower){
        if(character ==='a' || character === 'e' || character === 'i' || character ==='o' || character === 'u'){
            count++;
        }
    }
    return count++;
}
console.log(countVowels("Emon"));