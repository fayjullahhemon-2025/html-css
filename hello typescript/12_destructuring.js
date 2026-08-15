"use strict";
const user = {
    name: 'John',
    age: 30,
    isAdmin: true
};
// const age = user.age;
// const name = user.name;
// const {age,name}={name:'John',age:30,isAdmin:true};
const { age: userAge, isAdmin } = user;
const userInfo = ['Rahmat Ali', 25, true];
const [, age,] = userInfo;
console.log(age);
