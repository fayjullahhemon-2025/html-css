// console.log(sayhello());
// var sayhello = function (){
//     return "Hello";
// }
const student = {
    name: "Emon",
    age: 26,
    showName: function(){
        const name = "Sumon";
        // return name;// Sumon
        // return student.name;//Emon
        return this.name;//Emon
    },
    showAge: ()=>{
        const age = 30;
        // return age;//30
        // return student.age;//26
        return this.age;//arrow function e this object ke hold kre na. tai undefined value return kore 
    }

}
// console.log(student);
// console.log(student.showName());
console.log(student.showAge());
// console.log(this);

//arrow function

// syntax:
// const add = ()=>{
//     return something
// }

// const greeting = (name) =>{
//     return `Hello , ${name}. Good Morning`;

// }
// const greeting = (name) => `Hello , ${name}. Good Morning`;//implicit return
const greeting = name => `Hello , ${name}. Good Morning`;//implicit return + single parameter thakle first bracket na dileo hobe.
console.log(greeting('Emon'));

const person  = name => ({name,age:26});
console.log(person("Emon"));