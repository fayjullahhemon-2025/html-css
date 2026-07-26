// problem-3: Factorial of a number

function factorial(n){
    let fact = 1;
    for(let i = n; i>=1;i--){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));