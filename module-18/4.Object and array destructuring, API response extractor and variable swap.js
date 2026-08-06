/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/
const extractor = (obj)=>{
    // console.log(obj);
    // const {name:userName,age=18}=obj;
    // console.log(userName,age);
    const {user:{name:userName,age=18}} = obj;
    // console.log(userName,age);
    return {userName,age};
}
const user = {
    name:"Rafi",
    age:22
}
// console.log(extractor({
//     name:"Payel",
//     age:22
// }));
// console.log(extractor({
//     name:"Emon"
// }));
console.log(extractor({user:{name:"Emon",age:20}}));//object of object
console.log(extractor({user:{name:"Emon"}}));//object of object

/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/

let a = 10;
let b = 20;
[b,a]=[a,b];//swap value
console.log(a);//20
console.log(b);//10

let arr = [10,20,30,40];
let [first,...rest]=arr;
console.log(first);
console.log(rest);