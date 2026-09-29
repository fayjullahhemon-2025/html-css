function missingNumber(nums) {
    const setOfNums = new Set(nums);
    const newNums = [...setOfNums];
    const len = newNums.length;
    const sum = len * (len + 1) / 2;
    const actualSum = newNums.reduce((acc, currentInd) => {
        return acc + currentInd;
    }, 0);
    return sum - actualSum
}
console.log(missingNumber([0, 1, 3]))
console.log(missingNumber([0, 1, 2, 4]))