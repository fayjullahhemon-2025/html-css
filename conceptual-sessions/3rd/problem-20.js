// 4. Write a function that takes a number as a parameter and returns whether it is 'Even' or 'Odd'.

function evenOdd(number){
    if(number%2===0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(evenOdd(12));
console.log(evenOdd(11));