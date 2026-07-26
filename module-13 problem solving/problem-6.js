// problem=6: count vowels in a string 

function vowels(str){
    let vowelCount= 0;
    for(const i of str){
        if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(vowels("Programmimg Hero"));

