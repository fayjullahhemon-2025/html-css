// 7. Write a function that takes an array of numbers as a parameter and returns a new array containing only the numbers greater than 10.

const greaterThan10 = (numbers)=>{
    const returnArr = [];
    for(const num of numbers){
        if(num>10){
            returnArr.push(num);
        }else{
            continue;
        }
    }
    return returnArr;
}
console.log(greaterThan10([10,5,15,2,20,34,1]));