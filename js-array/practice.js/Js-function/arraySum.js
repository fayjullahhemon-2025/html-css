const numbers = [12,4,6,18,56];

let sum = 0;
for(const num of numbers){
    sum = sum + num;
    // console.log(num, sum);
}
console.log(sum);

const odds = [23,14,23,41,26];
let sumOdds = 0;
for(const num of odds){
    sumOdds = sumOdds + num;
}

const evens = [24,85,32,21];

let sumEvens = 0;

for(const num of evens){
    sumEvens = sumEvens + num;
}

function sumOfArray(array){
    console.log('Inside the function',array);
    let sum = 0;
    for(const num of array){
        sum = sum + num;
    }
    return sum;
}
const result = sumOfArray(numbers);
console.log(result);
