// 1. Given an array of numbers, remove duplicates and log the unique values only.

const number = [1, 6, 1, 5, 2, 2, 3, 2, 3, 3, 1, 3, 3, 3, 4, 5, 6, 1, 6];
const uniqueNumber = [];

for(let i = 0;i<number.length;i++){
    for(let j=i+1;j<number.length;j++){
        if(number[i]===number[j]){
            number[j]=Infinity;
        }else{
            continue;
        }
    }
}
// for(const num of number){
//     if(num===Infinity){
//         continue;
//     }else{
//         uniqueNumber.push(num);
//     }
// }
// console.log(uniqueNumber);
for(const num of number){
    if(num !==Infinity){
        console.log(num);
    }
}

