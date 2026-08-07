const discountTotal = (prices)=>{
    let updatedPrice = prices.map((price)=>{return price -=5});
    return updatedPrice.reduce((accumulator,cuurentVal)=>{
        return accumulator+cuurentVal;
    },0);
}
let prices = [100,250,80];
console.log(discountTotal(prices));