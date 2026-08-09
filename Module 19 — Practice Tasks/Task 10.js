// Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
// Given an array of orders { product, unitsSold }, 
// return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

// Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }] 
// Output: "Pen"
const getTopSellingProduct = (orders)=>{
    return orders.reduce((acc, order) => {

        if (acc[order.product]) {
            acc[order.product] += order.unitsSold;
        } else {
            acc[order.product] = order.unitsSold;
        }

        return acc;

    }, {})
    
}
console.log(getTopSellingProduct([{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 12 }, { product: "Pen", unitsSold: 25 }]));
// console.log(undefined===undefined);