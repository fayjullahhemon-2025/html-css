// Task 3: findProductByName(products, name) — find() 
// Given an array of product objects, return the first product matching the given name, or undefined if not found.
// Input: 
// products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 
// Output: 
// { name: "Bag", price: 500 }
const findProductByName = (products, name)=>{
    let selectedProduct = products.find(product=> product.name===name);
    // console.log(selectedProduct);
    if(selectedProduct=== undefined){
        return "Not found";
    }else{
        return selectedProduct;
    }
}
const products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }];
console.log(findProductByName(products,"Bag"));
// console.log(findProductByName(products));
// console.log(findProductByName(products,"pencil"));