// 6. Write a function that takes a string as a parameter and returns the number of vowels found in it.

const numberOfVowels = (str)=>{
    let count = 0;
    for(const character of str){
        if(character.toLowerCase() === 'a' ||character.toLowerCase() === 'e' ||character.toLowerCase() === 'i' ||character.toLowerCase() === 'o' ||character.toLowerCase() === 'u'){
            count++;
        }else{
            continue;
        }
    }
    return count;
}
console.log(numberOfVowels("I Am Emon"));