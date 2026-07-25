//Primitive datatypes are immutable

let number = 3; //In memory, Js create a space for 3 and store 3. number variable points to the address of the memeory where 3 stored.
number = 4; //Now Js again creates a space for 4 and store 4, number variable now points to the address of the memory where 4 is stored.
//console.log(number); //4
// reassigned to an primitive variable doesn't mean to change , modify or replace any value from the memory, it means JS create new space for new value and the variable points to the new values memory address. 

let name = "Emon";
//console.log(name[0]);
name[0]='Su'; // no modification to value
//console.log(name); // Emon

//Non-primitive datatype variables value can be modified,change,replace.

const arr = [1,2,3,4];
arr[0]=5;
// console.log(arr); // data modified. [5,2,3,4]

const user = {
    name:"Emon",
    age:20
}
user.age = 26;
console.log(user); //{ name: 'Emon , age: 26}
