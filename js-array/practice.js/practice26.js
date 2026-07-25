// 5. Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]

const numbers = [1,2,3,4,5];
console.log(numbers);
const temp = numbers[0];
numbers[0] = numbers[numbers.length-1];
numbers[numbers.length-1] = temp;
console.log(numbers);

