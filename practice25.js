// 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]
const numbers = [1,[2,3],[4,[5,6]]];
const oneDArrayStr = numbers.join(',');
const oneDArraySplit = oneDArrayStr.split(',');
const oneDArray = [];
// const oneDArray = oneDArrayStr.split(',');
// console.log(oneDArray);
for(const num of oneDArraySplit){
    oneDArray.push(Number(num));
}
console.log(oneDArray);
