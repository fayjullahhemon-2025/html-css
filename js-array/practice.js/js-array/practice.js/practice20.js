// 8. Given an array of numbers, log only the values greater than 10, using a loop.

const numbers = [1,4,5,7,9,29,12,43,234,1435,1231,12,19,10,-23];
for(const num of numbers){
    if(num>10){
        console.log(num);
    }
}