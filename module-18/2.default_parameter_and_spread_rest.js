// problem 1: flexible total calculator

const discountPrice = (discount=0,...prices)=>{
    if(Number.isNaN(discount)){
        discount = 0;
    }
    // let total = 0;
    // prices.forEach(price=> total = price+total);
    let total = prices.reduce((accumulator,currentValue)=> accumulator+currentValue)
    return (total-total*(discount/100));
};
console.log(discountPrice(10,100,200,300,50));

// problem 2: merge and duplicate arrays 

let arr1= [10,20,30,50,40];
let arr2= [50,60,20,90];

let mergeArr = [...arr1,...arr2];//merge arr1,arr2
console.log(mergeArr);
// let uniqueArr = [...new Set(mergeArr)];
let uniqueArr = Array.from(new Set(mergeArr));
console.log(uniqueArr);