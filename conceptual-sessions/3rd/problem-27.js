// 3. Write a function with a default parameter for discount percentage (10%) that returns the discounted price of an item.

const discountPrice = (items,discount = 10)=>{
    let sum = 0;
    for(let item of items){
        sum = sum + item;
        
    }
    // console.log(sum);
    // console.log(sum+sum*(discount/100));
    return sum+sum*(discount/100);
}
console.log(discountPrice([5,10,15]));