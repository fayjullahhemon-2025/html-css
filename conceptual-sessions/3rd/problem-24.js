// 8. Write a function that takes an array of numbers as a parameter and returns the average of all the elements.

const avgOfArr = (arr)=>{
    let sum = 0;
    for(const num of arr){
        sum +=num;
    }
    return sum/arr.length;
}
console.log(avgOfArr([1,2,3,4,5]));