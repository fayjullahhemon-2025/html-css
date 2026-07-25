//hoisting: when a variable is declared , In js it divided into two part. first one is declaration part and second one is initialization part. first part is executed by js while compiling. thats why in const and let, we see an referenceError: Cannot access variable before initialization.
// variable that declares using var keyword, divided two part. first one is var a = undefined and 2nd was is a = 2(any value); so that 
// console.log(a);
// var a = 3; 
//the output will be undefined.

console.log(a);

var a = 4;