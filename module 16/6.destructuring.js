//destructuring
//array and object destructuring kora jay

//array

const arr = [1,2,3,4,5,6];
// console.log(arr[0]);//traditonal rule
const secondVal = arr[1];

//after destructuring arr
const [one,two,,four,,lastValue] = arr;
console.log(four);

const person = {
    name:"Emon",
    id:72,
    age:26,
    marks:{
        physics:95,
        math:90,
        chemistry:87
    }
}
// console.log(person.marks);//{physics:95, math:90,chemistry:87}

// console.log(person.math.physics);//95

const {age, name, id, marks:{physics,chemistry,math}} = person;

console.log(physics, math, chemistry);

