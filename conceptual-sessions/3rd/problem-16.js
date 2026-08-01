// 8. Given a sentence (string), count and print how many times a specific character appears in it.
const str = "Hello I am Emon";
// const obj = {};
// for(const s of str){
//     obj[s] = (obj[s] || 0)+1;
// }
// console.log(obj);
let count = 0;
const specificCharacter = 'o';
for(const s of str){
    if(specificCharacter === s){
        count++;
    }
}
console.log(specificCharacter,":",count);