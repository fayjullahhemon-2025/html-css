// Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
// Input: 
// [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
// Output: 
// [{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]

const getAvailableProducts = (products)=>{
    return products.filter(product=> product.stock>0);
}
const products = [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] ;
console.log(getAvailableProducts(products));