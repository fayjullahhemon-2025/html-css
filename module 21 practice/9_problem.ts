const userInfo:Function = (name:string='guest',age?:number):string=>{
    return `username = ${name}`;
}
console.log(userInfo(undefined));