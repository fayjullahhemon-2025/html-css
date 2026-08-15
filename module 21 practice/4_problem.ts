type userType = {name:string,email?:string};

const user:userType = {
    name:"emon"
};
const user2:userType = {
    name:"emon",
    email:"femo.ome@gmail.com"
};
const userInfo:Function = (user:userType):string=>{
    if(!user.email){
        return `Name: ${user.name}, Email: "Not provided"`;
    }
    return `Name: ${user.name}, Email: ${user.email}`
}
// console.log(userInfo(user));
console.log(userInfo(user2));