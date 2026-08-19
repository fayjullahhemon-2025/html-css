"use strict";
// type User = {
//     name:string,
//     age:number 
// }
// type OptionalUser = {
//     name?:string,
//     age?:number 
// }
// type User = {
//     name:string,
//     age:number 
// }
// type OptionalUser = {
//     [key in keyof User] ?: User[key]
// }
// type ReadOnlyUser = {
//     readonly [key in keyof User] : User[key];
// }
// const user:ReadOnlyUser = {
//     name:"Emon",
//     age:26
// }
// user.name = "payel"; //show error
Object.defineProperty(exports, "__esModule", { value: true });
// type User = {
//     name:string,
//     age:26
// }
// type BoolUser = {
//     [key in keyof User]: boolean 
// }
// const userStatus:BoolUser = {
//     name:true,
//     age:false
// }
