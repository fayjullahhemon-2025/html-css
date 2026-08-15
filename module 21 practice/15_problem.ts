type userType = {name:string,age:number,address:addressType};
type addressType = {city:string, zipCode:number,country:string};
const user:userType = {
    name:"Emon",
    age:26,
    address:{
        city:"Dhaka",
        zipCode:1217,
        country:"Bangladesh"
    },
};
// const country:string = user?.address?.country;

let userCountry: (user:{
    name:string,
    age:number,
    address:{
        city:string,
        country:string
    }
}) => string;
userCountry = (user):string=>{
    const country:string = user?.address?.country;
    return country;
}

console.log(userCountry(user));