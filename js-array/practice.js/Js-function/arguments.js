function multiply(num1, num2) {//num1,num2 are parameter
    const result = num1 * num2;
    console.log(result);
}
// multiply(3, 4);//3,4 are argument
// multiply(2, 3, 4, 5, 6);// output will be 2*3 = 6

function square(number) {
    const result = number * number;
    console.log(result);
}
// square(2, 3);// OUTPUT WILL BE 2*2 = 4
function square2(number) {
    const result = number * number;
    return result;//return result from here
    console.log(result);//return result before printing
}
console.log(square2(2, 3));// OUTPUT WILL BE 2*2 = 4
