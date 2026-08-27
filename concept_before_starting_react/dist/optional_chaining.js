"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//optional chaining
const user = {
    name: "Nowshin",
    // city:"Nakla"
};
// console.log(user?.city);
//nullish coalescing
// const name = undefined;
const name = "Emon";
//name thakle dekhabo na thakle loading.
//jdi variable e null or undefined store thake  tobe kebl ami nullish coalescing use korbo
// if(name){
//     console.log(name);
// }else{
//     console.log("...loading");
// }
// name?console.log(name):console.log("loading");
// name ?? console.log("Loading...")
console.log(name ?? "Loading...");
//# sourceMappingURL=optional_chaining.js.map