// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
// Input: 
// [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
// Output:
//  [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]

const sortByPriceAscending = (products)=>{
    // return products.filter(product=>{
    //     const {name,price}=product;
    //     return [name,price];
    // }).sort((a,b)=>a.price-b.price);
    return [...products].sort((a,b)=>a.price-b.price);
}
const products = [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }];
console.log(sortByPriceAscending(products));
console.log(products);