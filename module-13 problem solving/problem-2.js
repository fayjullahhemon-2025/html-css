//problem-2: sum of a rang of numbers (1 to N)

function sumOfSequence(N){
    let sum = 0;
    for(let i = 1; i<=N;i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfSequence(5));
console.log(sumOfSequence(7));