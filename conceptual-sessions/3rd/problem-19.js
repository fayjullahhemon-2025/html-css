// 3. Write a function with a default parameter for tax rate (5%) that calculates and returns the total price of an item including tax.

function finalPrice(items){
    let sum = 0;
    for(const item of items){
        sum = sum+item;
    }
    let total = sum+sum*(5/100);
    return total;
}
console.log(finalPrice([10,20,10,10]));