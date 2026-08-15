"use strict";
const user = {
    name: "Emon",
    age: 26,
    email: "femo.emo@gmail.com",
    isLoggedIn: true
};
const isUserLoggedIn = (user) => {
    if (user.isLoggedIn) {
        return true;
    }
    return false;
};
console.log(isUserLoggedIn(user));
