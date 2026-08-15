const sumAll:Function = (...nums:number[]):number=>{
    let sum:number = 0;
    for(const num of nums){
        sum+=num;
    }
    return sum;
};
console.log(sumAll(1,2,3,4,5));