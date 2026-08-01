//Scope -> Global scope,block scope,function block
let something = "Test";//global
var something2 = "Test2"; //global
const something3 = "Test3";//global
if (true) {
    let something = "Test4";//global
    var something2 = "Test5"; //global
    const something3 = "Test6";//global
}
console.log(something,something2,something3);//Test Test5 Test 3
//let const are block scope
//var only function scope
console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
var age = 26;
var age = 23;
console.log(age);//25
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let b = 23;
b = 26;
console.log(age);//26
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(a);//hoisting, let,const er belay TDZ e chole jay
var a = 10;
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
