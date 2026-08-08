// Task 4: getTotalStockValue(products) — reduce() 
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
// Input:
//  [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
// Output: 400
const getTotalStockValue = (products)=>{
    return products.reduce((accumulator,currentVal)=>accumulator+currentVal.price*currentVal.stock,0);
}
const products = [{ price: 50, stock: 4 }, { price: 20, stock: 10 }];
console.log(getTotalStockValue(products));