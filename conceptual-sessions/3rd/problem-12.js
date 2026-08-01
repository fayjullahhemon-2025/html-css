// 4. Reverse a given string manually using a for loop (without using split/reverse/join).
const str = "I am Emon";
let reversedStr = '';
for(let i =str.length-1;i>=0;i--){
    reversedStr = reversedStr+str[i];
    // console.log(str[i]);
}
console.log(reversedStr);