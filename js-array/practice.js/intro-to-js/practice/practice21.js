// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const cart = 1235;
const isMember = true;
let discountPrice = 0;

if(cart>1000 && isMember){
    const discount = 20/100;
    discountPrice = cart - discount*cart;
}else if(cart > 1000 && !isMember){
    const discount = 10/100;
    discountPrice = cart - discount*cart;
}else{
    const discount = 0/100;
    discountPrice = cart - discount*cart;
}
console.log("Price : ",discountPrice);