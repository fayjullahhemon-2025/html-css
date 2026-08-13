const numbers = [1,2,3,4,5,6,7,8,9,10];

const number = numbers.map(num=>{
    
    // return 1 //1 store krbe new array te 
    return {
        num: num,
        squaredNum: num*num,
        qubedNum: num*num*num,
        squareRoot: Number(Math.sqrt(num).toFixed(2))
    }
});
console.log(number);
// console.log(number);