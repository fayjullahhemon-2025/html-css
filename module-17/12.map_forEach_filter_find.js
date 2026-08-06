let numbers = [2,4,6,8,10];
let double = [];
// for(let i = 0; i<numbers.length;i++){
//     double.push(numbers[i]*2);
// }
// console.log(double); 
//map -> to modify array and get new array
const doubledNumber = numbers.map(numbers=> numbers*2);
console.log(doubledNumber);
//forEach
let rolls = [10,12,14,15,16,19,20];
rolls.forEach((element,index,arr)=>{
    // console.log(element,index,arr);
})

//filter
let prices = [100,200,300,400,500,600,700,800,900,1000];
const expensiveProductsPrice = prices.filter(price=> price>500);
// console.log(expensiveProductsPrice);

//find
const lowestPriceOfExpensiveProduct = prices.find(price=> price>500);
console.log(lowestPriceOfExpensiveProduct);

let phones  = [
    {
        model:"Iphone 15",
        price:72000
    },
    {
        model:"Iphone 16",
        price:86000
    },
    {
        model:"Iphone 17",
        price:92000
    },
    {
        model:"S25 ultra",
        price:92000
    },
    {
        model:"Techno",
        price:15000
    },
    {
        model:"Redmi note 17s",
        price:21000
    },
];
const expensivePhones = phones.filter(record=> record.price>=50000).sort((a,b)=>b.price-a.price).map(phone=>phone.model);
// console.log(expensivePhones);
const chepeastPhones = phones.filter(phone=>phone.price<50000).sort((a,b)=>a.price-b.price).map(phone=>phone.model);
// console.log(chepeastPhones);
const lowestPriceFromChepeastPhone = phones.filter(phone=> phone.price<50000).sort((a,b)=>a.price-b.price).find(phone=>phone.price<50000);
// console.log(lowestPriceFromChepeastPhone);

const numberArr = [10,20,30,40];
const sum = numberArr.reduce((accumulator,currentValue,index,arr)=>{
    return accumulator+currentValue;
},0)
console.log(sum);