"use strict";
const user = {
    name: "emon"
};
const user2 = {
    name: "emon",
    email: "femo.ome@gmail.com"
};
const userInfo = (user) => {
    if (!user.email) {
        return `Name: ${user.name}, Email: "Not provided"`;
    }
    return `Name: ${user.name}, Email: ${user.email}`;
};
// console.log(userInfo(user));
console.log(userInfo(user2));
