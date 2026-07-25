// Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.

const price1 = 20;
const price2 = '20';

console.log(price1==price2);//true. since == is only check the value, not type
console.log(price1===price2); //false. since === is check the value and type and how they are stored in memory
console.log(price1!=price2);//false. since != is only check the value , not type
console.log(price1!==price2);//true. since !== is strictly check the value, type and how they are stored in memory
console.log(price1>price2); //false
console.log(price1<price2);//false
console.log(price1>=price2);//true, JavaScript implicitly converts them into actual numbers before making the comparison.
console.log(price1<=price2);//true, JavaScript implicitly converts them into actual numbers before making the comparison.