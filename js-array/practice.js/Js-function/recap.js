//how to declare a function
function firtFunction(){

}
//how to call a function
firstFunction();

function divide(num1,num2){
    const result = num1/num2;
    console.log('divide result',result);
}

//3. How to deal with parameter
divide(500,9);

//how to deal with return
function doMath(a,b,c,d){
    const firstSum = a + b;
    const secondSum = c + d;
    const multiplied = firstSum * secondSum;
    const divided = multiplied/4;
    return divided;
}
const result = doMathh(4,8,16,24);

//5.Call function with a variable
const denominator = 2;
divide(result , denominator);
