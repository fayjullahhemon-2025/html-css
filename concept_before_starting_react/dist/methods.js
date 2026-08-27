"use strict";
//filter(),map(),find(),includes()
//filter() ===>delete,insert
//map()===> showingg data on the UI. shobcheye beshi use hoy map react e 
//find()===>find out specific data
//includes()===> array or string e kno element ache kina
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5, 6];
// const newArr = numbers.filter(num=> num!==2);
const newArr = numbers.map((num, index) => {
    // console.log(index)
    // return num
});
// console.log(newArr);
const items = ['book', 'laptop', 'tablet'];
const showData = items.map((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
// console.log(showData)
const products = ["Book", "Pen", "Laptop"];
const searchProduct = products.find(item => item === 'Pen');
// console.log(searchProduct)
//includes()
const string = "Hello I am Emoinna";
console.log(string.includes("Emoinna"));
//# sourceMappingURL=methods.js.map