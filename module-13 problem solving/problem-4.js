// problem-4: FizzBuzz (1 to N)
//loop through numbers 1 to N . if a number is divisible by 3, print "Fizz". if divisible by 5, print Buzz. If both then print FizzBuzz.otherwise print itself

function FizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
FizzBuzz(15);
