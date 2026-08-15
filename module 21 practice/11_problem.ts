type userType={name:string,age:number,email:string,skills:object,active:boolean};
const user:userType = {
    name:"Amina",
    age:22,
    email:"amina@gmail.com",
    skills:['Html','Css','TypeScript'],
    active:true
}
const userInfo:Function = (user:userType):userType=>{
    return user;
}
console.log(userInfo(user));