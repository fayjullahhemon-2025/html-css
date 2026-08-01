// 5. Write a function that takes an array of numbers as a parameter and returns the sum of all the elements.

function sumOfAllNumbersInArray(arr){
    let sum = 0;
    for(const number of arr){
        sum = sum + number;
    }
    return sum;
}
console.log(sumOfAllNumbersInArray([1,2,3,4,5]));