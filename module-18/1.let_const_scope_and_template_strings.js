// var status = "Order placed";
// for(var i = 1; i<=3;i++){
//     var status = "Processing Item "+i;
//     console.log(status);
// }
// console.log(status);
// bug fixed:
// let status = "Order placed";
// for(var i = 1; i<=3;i++){
//     let status = "Processing Item "+i;
//     console.log(status);
// }
// console.log(status);

console.log(((name,price,qty)=> `${name}: ${qty}x${price} = ${qty*price}`)("Pan",120,5));