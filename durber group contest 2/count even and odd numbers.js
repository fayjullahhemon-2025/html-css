function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    for(let num of numbers){
        if(num%2===0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    return {even:evenCount,odd:oddCount};
}
console.log(countEvenOdd([1,2,3,4,5]));
console.log(countEvenOdd([10,20,30]));