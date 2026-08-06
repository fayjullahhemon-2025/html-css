/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/


const expensiveProduct = (product)=>{
    let expensive = -Infinity;
    let expensiveProductName;

    // let keys = Object.keys(product);
    // for(const key of keys){
    //     if(product[key]>expensive){
    //         expensive = product[key];
    //         expensiveProductName = key;
    //     }
        
    // }
    // return expensiveProductName;
    let entries = Object.entries(product);
    // for(const [key,value] of entries){
    //     if(value>expensive){
    //         expensive = value;
    //         expensiveProductName = key;
    //     }
    // }
    // return expensiveProductName;
    for(const item in product){
        if(product[item]>expensive){
            expensive = product[item];
            expensiveProductName = item;
        }
    }

    return expensiveProductName;
}


const product = {
    pen: 20,
    book:150,
    bag:500,
    lipstick:15
}
// console.log(expensiveProduct(product));

// console.log(getMostExpensiveProduct({ pen: 20, book: 150, bag: 500, bat: 750, laptop: 30000, desktop: 70000 }));

/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/
const user = {
    name:"Emon",
    age:26,
    address:{
        city:"Dhaka",
        "Post Office":"Ramna",
        "Zip code":1217
    }
}

const user2 = {
    name:"Ananna",
    age:25,
    
}

console.log(user?.address?.city);
console.log(user2?.address?.city);

