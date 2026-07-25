// reverse using reverse function 
const number = [1,2,3,4,5];
number.reverse();
// console.log(number);

//reverse using unshift 

const number2 = [1,2,3,4,5];
const reversedNumber2 = [];
for(const numb of number2){
    // console.log("Input", numb);
    reversedNumber2.unshift(numb);
    // console.log(reversedNumber2);
}

//reverse using normal loop and push

const number3 = [1,2,3,4,5];
const reversedNumber3 = [];
for(let i = number3.length-1;i>=0;i--){
    reversedNumber3.push(number3[i]);
    console.log(reversedNumber3);
}