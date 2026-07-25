const numbers = [12,87,14,51,36,46];

function evenNumbers(array){
    const returnArray = [];
    for(const num of array){
        if(num%2===0){
            returnArray.push(num);
        }else{
            continue;
        }
    }
    return returnArray;
}

const evenNumArray = evenNumbers(numbers);
console.log(evenNumArray);