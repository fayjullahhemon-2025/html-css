//spread and rest operator
//spread -> choraye deya
//

let numbers = [10,20,30,40,50];
console.log(numbers);//output: [10,20,30,40,50]
console.log(...numbers);//ekhn number choraye jabe
//output : 10,20,30,40,50
console.log(10,20,30,40,50);//10,20,30,40,50
let maxNumber = Math.max(100,200,300,100,50,670);
// let maxNumber2 = Math.max([100,200,300,100,50,670]);//error dibe cz Math.max expect kortese number commma (,) diye diye ashbe. but array chole ashse. tai error dibe
let maxNumber2 = Math.max(...numbers);//50 output ashbe, jdio edike numbers array deya hoyeche kintu choraye deya hoyese spread operator use kore.
console.log(maxNumber);
//but object e evabe use kora jay na. onno vabe korte hobe
let student = {
    name:"Emon",
    age:26
}
// console.log(...student);//error
//numbers2 array jdi numbers array er copy hoy tahole numbers2 and numbers array same address e point kore thakbe. ete numbers e change krle numbers2 teo change hoy. 
// let numbers2 = numbers;
// numbers.push(4);
// console.log(numbers2); //output: [10,20,30,40,50,4]

//numbers2 ke sadhin ba shallow copy hote hole spread operator use korte hobe
let numbers2 = [...numbers];
numbers.push(399);
console.log(numbers2);//[10,20,30,40,50]. change hoy ni
//chaile numbers er age pore number add kora jay
let numbers3 = [90,23,...numbers,5000,24,5];
console.log(numbers3);

//Object ke independtly copy krte gele:

let person = {
    name:"Emon",
    age:26
};
let person2 = person;
person.something = "Test";
console.log(person2);//person2 o change hoye jacche

let person3 = {...person,cgpa:3.52};
person2.something2 = "Test2";
console.log(person);//person2 te change koray person eo change hoye gese
console.log(person2);//person2 te change kora hoyeche
console.log(person3);//jehetu person3 independent tai person3 change hoy nai copy hbar poro

//Rest Operator-> function er parameter hishebe use hoy

function sum(a,b,c,...restNumbers){
    // console.log(restNumbers);//array te dibe
    let sum = 0;
    for(const num of restNumbers){
        sum = sum + num;
    }
    return a+b+c+sum;
}
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3));//restNumbers is like optional parameter
console.log(sum(1,2));//NaN cz 3rd argument is not given