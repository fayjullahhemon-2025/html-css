"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = ["Emon", 26];
// let user:[string,number] = [26,"Emon"];//error
// console.log(user);
// Array Vs Tuple 
// 1.Array te same type of value thake but tuple e multiple type of value thakte pare 
// 2. Array te each position e ki type data boshbe sheta typescipt e shuru te ekbar declare kore dey but tuple e age theke bole deya hoy kon kon position e kon kon datatype boshbe jehetu tuple multiple type support kre
// 3.Array er flexible length hote pare but tuple e hobe na
// 4. Array mane generic collection and tuple mane structured data 
let numbers = [1, 2, 3, 4, 5];
let employes = ["Emon", 260000, true];
// console.log(employes[0]);
// console.log(employes[1]);
// console.log(employes[2]);
let [name, salary, isLoggedIn] = employes;
// console.log(salary);
//function
function getUser() {
    return ["Emon", 30000
    ];
}
console.log(getUser());
