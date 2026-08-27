"use strict";
//logical && operator
// let age = 17;
// let hasID = true;
// if(age>=18 && hasID){
//     console.log("You can enter");
// }else{
//     console.log("vag")
// }
Object.defineProperty(exports, "__esModule", { value: true });
const userName = null; //truthy
if (userName) {
    console.log(userName);
}
else {
    console.log("Loading....");
}
//left=true     right=true , return username
const result = userName && "User name is " + userName; //short circuit
// console.log(result)
//# sourceMappingURL=operators.js.map