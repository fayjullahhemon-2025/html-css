// 4. Write a function that takes an array of numbers as a parameter and returns a new array containing only the even numbers.

function retrunEven(arr){
    const evenNums = [];
    for(const num of arr){
        if(num%2===0){
            evenNums.push(num);
        }else{
            continue;
        }
    }
    return evenNums;
}
console.log(retrunEven([1,2,3,4,5,6,7,8,9,10]));