// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

const arr = [-1,-45,-29, -27, -26, -23, -12, -10, -7,0, -1, 1, 2, 13, 14, 19, 20, 25];

let MaxValue = -Infinity;
let MinValue = Infinity;

for(const num of arr){
    if(num>MaxValue){
        MaxValue = num;
    }
    if(num<MinValue){
        MinValue = num;
    }
}
console.log(MaxValue);
console.log(MinValue);