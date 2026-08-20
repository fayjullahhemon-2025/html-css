"use strict";
// function getStr(a:string){
//     console.log(a);
// }
// function getNum(a:number){
//     console.log(a);
// }
Object.defineProperty(exports, "__esModule", { value: true });
function get(a) {
    if (typeof a === 'string') {
        return a.length;
    }
    else if (typeof a === 'number') {
        return a * a;
    }
    else {
        return !a;
    }
}
let getStr = get('abc');
let getNum = get(2);
let getBool = get(true);
console.log(getStr);
console.log(getNum);
console.log(getBool);
