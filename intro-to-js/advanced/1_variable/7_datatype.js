// Primitive Datatype
//1. number , 2. string , 3. boolean , 4.undefined , 5. bigint , 6. null , 7.symbol

let num = 3;
//console.log(typeof num); //number

let str = 'Emon';
//console.log(typeof str); // string

let bool = true;
//console.log(typeof bool); // boolean

let abc; //since it has no initialized value, the default value will be undefined
//console.log(typeof abc);//undefined

let bigInteger = 12938670341n;
//console.log(typeof bigInteger);//bigint

let nullValue = null;
//console.log(typeof nullValue); // object [js bug]

let id1 = Symbol("user");
let id2 = Symbol("user");
//console.log(id1===id2);
const id3 = Symbol();
const id4 = Symbol();
//console.log(id3===id4);
//Non-primitive Datatyps
//array,object,function
const player=["Emon",10,26];
//console.log( typeof player); //object

const user = {
    name: "Emon",
    jersyNumber : 10,
    age : 26
}
//console.log( typeof user);

function greet(){
    //console.log("Good Morning");
    // return "Hello";
}
// greet();
//console.log(typeof greet);//function
//onsole.log(typeof greet());//undefined

function greetings(){
    // console.log("Good Morning");
    return "Hello";
}
greetings();// print nothing, since the return value is not save anywehre
console.log(greetings());//Hello
console.log(greetings);//[Function: greetings]
console.log(typeof greetings());//String
