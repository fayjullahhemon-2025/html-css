const num1 = 29;
const num2 = 92;
console.log(num1 + num2); //121

const str1 = "Hello";
const str2 = "World";
console.log(str1 + str2);//Helloworld
console.log(str1 +" "+ str2);//Hello world

const num3 = 10;
const num4 = '10';

console.log(num3+num4); //1010

// parseInt() convert the string number into a number 
console.log(num3+parseInt(num4)); //20

let numString = '20';
console.log(typeof numString); //'String'

numString = parseInt(numString);
console.log(typeof numString); //'Number'

let floatNumString = '20.34';

console.log(parseInt(floatNumString)); // 20, since parseInt convert the string into a Integer, so it losses the integer part only

floatNumString = parseFloat(floatNumString);

console.log(floatNumString); // 20.34

const number1 = 0.1;
const number2 = 0.2;
console.log(number1+number2); //0.30000000000000004 // 17 digit after point

// to fix this we can use toFixed() which take 0 to 20. thats mean you can take 0 to 20 digit after point. 

console.log((number1+number2).toFixed(2));
console.log(typeof (number1+number2).toFixed(2)); //toFixed() convert the number into string.
console.log(typeof ((parseFloat(number1+number2)).toFixed(2))); //'string'
console.log(typeof parseFloat((number1+number2).toFixed(2)) );//'number'
