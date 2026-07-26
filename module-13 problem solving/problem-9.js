//problem 9: Find the largest number from a number array

function laragestVal(numbers){
    let maxVal = -Infinity;
    for(const number of numbers){
        if(number>maxVal){
            maxVal = number;
        }else{
            continue;
        }
    }
    return maxVal;
}
const numbers = [500,50,20,30,125,1000];
console.log(laragestVal(numbers));