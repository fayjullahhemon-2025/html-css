"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//any type -> not recommended
//error check krbe na and safety nai
let data = "Emon";
data: 26;
data: true;
console.log(true);
//Unknown Type => Any er safest version. Jekno type deya jabe but unknown age type check kore nibe.
//eta use korar correct way hocche ae type amdr expected type kina sheta if diye check kore nibo.
let data2 = 'Hello';
if (typeof data2 === 'string') {
    console.log(data2);
}
