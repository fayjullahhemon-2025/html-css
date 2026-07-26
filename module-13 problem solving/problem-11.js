// problem 11: sum and avg of a number array 

function sumAvg(numbers){
    let sum = 0;
    for(const num of numbers){
        sum = sum + num;
    }
    let avg = sum/numbers.length;
    const sumAvgArr = [sum,avg];
    return sumAvgArr;
}

const numbers = [ 1,2,10,5];
console.log(sumAvg(numbers));