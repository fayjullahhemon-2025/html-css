let a = '23';
console.log(typeof a);
console.log(typeof Number(a));
let b = 34;
console.log(typeof b)
console.log(typeof String(b));
//==================================
console.log('===========================');
let c  = '12abc';
console.log( Number(c)); //NaN
console.log(typeof Number(c)); //number

console.log(String(NaN));
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log("-----------------");

console.log(Boolean("true"));
console.log(Boolean(1));
console.log(Boolean("Hello world"));
console.log(Boolean("!"));
console.log(Boolean("0"));
console.log(Boolean("false"));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log("==================");
let d = 0.1;
let e = 0.2;
let f = d+e;

console.log(f==0.3);