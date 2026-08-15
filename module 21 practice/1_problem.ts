let printUser:Function;
printUser = (name:string,age:number):string=>{
    const userInfo:string = `${name} is ${age} years old.`;
    return userInfo;
}
console.log(printUser("Amina",22));