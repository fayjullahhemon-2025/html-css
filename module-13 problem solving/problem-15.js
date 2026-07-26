// problem-15: Return all even numbers then their sum 

function sumOfEvenNumbers(numbers){
    let sum = 0;
    const evenNumbers = [];
    for(const num of numbers){
        if(num%2===0){
            evenNumbers.push(num);
        }else{
            continue;
        }
    }
    for(const num of evenNumbers){
        sum = sum + num;
    }
    const obj = {
        Numbers : evenNumbers,
        Sum: sum, 
    }
    return obj;
}

console.log(sumOfEvenNumbers([1,2,3,4,5,6,7,8,9,10]));