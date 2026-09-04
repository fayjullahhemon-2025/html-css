function findSecondLargestUnique(numbers) {
    let setNums = new Set(numbers);
    let nums = [...setNums];
    if (nums.length >= 2) {
        let sortedNums = nums.sort((a, b) => b - a);
        return sortedNums[1];
    }
    else{
        return null;
    }

}
console.log(findSecondLargestUnique([10, 5, 20, 5, 15]));
console.log(findSecondLargestUnique([3, 3, 3]));
console.log(findSecondLargestUnique([20,20,10,5]));