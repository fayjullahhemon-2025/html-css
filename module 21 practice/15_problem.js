"use strict";
const user = {
    name: "Emon",
    age: 26,
    address: {
        city: "Dhaka",
        zipCode: 1217,
        country: "Bangladesh"
    },
};
// const country:string = user?.address?.country;
let userCountry;
userCountry = (user) => {
    const country = user?.address?.country;
    return country;
};
console.log(userCountry(user));
