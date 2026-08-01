// 5. Write a function that takes a number as a parameter and returns its factorial.

const fact = function (num){
    let fact = 1;
    if(num===0){
        return 1;
    }
    for(let i = num; i>=1;i--){
        fact = fact * i;
    }
    return fact;
}
console.log(fact(5));
console.log(fact(0));