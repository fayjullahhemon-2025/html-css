// function add(num1,num2){
//     return num1+num2;
// } //without typescript
function add(num1:number,num2:number):number{
    return num1+num2;
}
function add2(num1:number,num2:number):number[]{
    const total:number =  num1+num2;
    return [total]; // array return
}
function add3(num1:number,num2:number):number[]{
    const total:number =  num1+num2;
    return [total]; // array return
}
// function add4(num1:number,num2:number):{}{
//     const total:number =  num1+num2;
//     return {total:total}; // object return
// }
// console.log(add4(4,5))
// function add4(num1:number,num2:number):{total:number}{
//     const total:number =  num1+num2;
//     return {total:total}; // object return
// }
// console.log(add4(4,5))
function add4(num1:number,num2:number):{total?:number}{
    const total:number =  num1+num2;
    return {total:total}; // object return
}
console.log(add4(4,5))
function add5(num1:number,num2:number):[string,number]{
    const total:number =  num1+num2;
    return ['total',total] // array return
}
// console.log(add4(4,5))
console.log(add5(4,5))

