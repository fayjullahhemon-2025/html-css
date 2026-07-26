//problem 10: Find the smallest number from a number array

function smallestVal(numbers){
    let minVal = Infinity;
    for(const number of numbers){
        if(number<minVal){
            minVal = number;
        }else{
            continue;
        }
    }
    return minVal;
}
const numbers = [500,50,20,30,125,1000];
console.log(smallestVal(numbers));