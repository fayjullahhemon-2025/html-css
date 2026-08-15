type userType={name:string,age:number,email:string,isLoggedIn:boolean};

const user:userType = {
    name:"Emon",
    age:26,
    email: "femo.emo@gmail.com",
    isLoggedIn: true
}
const isUserLoggedIn:Function = (user:userType):boolean=>{
    if(user.isLoggedIn){
        return true;
    }
    return false;
}
console.log(isUserLoggedIn(user));