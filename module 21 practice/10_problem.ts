const typeChecker:Function = (num:unknown)=>{
    return typeof num==='string'?num:typeof num;
}
console.log(typeChecker('Hello'))
console.log(typeChecker(2))