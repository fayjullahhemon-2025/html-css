// 6. Write a function that takes three numbers as parameters and returns the largest of the three.

const largestNumber = function(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

console.log(largestNumber(2,3,4));