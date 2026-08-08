// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
// Input: 
// products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
// Output: 144
const getDiscountedTotalForCategory = (products, category)=>{
    let total= products.filter(product=>product.category===category).reduce((accumulator,currentVal)=>accumulator+currentVal.price,0);
    return total-total*0.1;
}
const products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }];
console.log(getDiscountedTotalForCategory(products,"stationery"));