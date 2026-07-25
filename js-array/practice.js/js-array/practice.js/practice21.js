// 9. Given an array of numbers, calculate and log the total sum, using a loop.

const numbers = [1,2,3,4,5];
let sum = 0;
for(const num of numbers){
    sum = sum + num;
}
console.log(sum);