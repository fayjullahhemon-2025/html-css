/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

// console.log(((orderAmount,shippingFee=60)=>{
//     if(orderAmount>=1000){
//         return "Free Shipping";
//     }else if(orderAmount<1000){
//         return shippingFee;
//     }
// })(1299));
// console.log(((orderAmount,shippingFee=60)=>{
//     if(orderAmount>=1000){
//         return "Free Shipping";
//     }else if(orderAmount<1000){
//         return shippingFee;
//     }
// })(999));
// console.log(((orderAmount,shippingFee=60)=>{
//     if(orderAmount>=1000){
//         return "Free Shipping";
//     }else if(orderAmount<1000){
//         return shippingFee;
//     }
// })(999,1000));

/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/

console.log(
    (number => {
        // if (Number.isNaN(number)) {
        //     return "invalid";
        // } else {
            // if (number >= 90) { return "A+" }
            // else if (number >= 80 && number < 90) { return "A" }
            // else if (number >= 60 && number < 80) { return "B" }
            // else { return "Fail" }
            
        // }
        return typeof number!=='number'?"Invalid":number>=90?"A+":number>=80&&number<90?"A":number>=60&&number<80?"B":"Fail";
    })(89)
);