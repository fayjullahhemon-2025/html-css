function greet(name= "Guest"){
    return "Hello, "+name;
}
console.log(greet("Emon"));
console.log(greet());
console.log(greet("Afsar"));

// before es6

function greetOld(name){
    name = name || 'Guest';
    return name;
}
console.log(greetOld());
console.log("~~~~~~~~~~~~~~~~~~~~");

function makeCoffee(suger = 1){
    return "Coffee is prepared with "+suger +" spoon suger";
}
console.log(makeCoffee());