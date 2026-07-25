// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

const year = 2020;
if(year % 4 === 0){
    console.log(year+ " is a Leap Year");
}
else if(year%400===0 && year%100===0){
    console.log(year+" is not a Leap Year");
}