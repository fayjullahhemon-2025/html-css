"use strict";
//never type => infinity loop, jokhn function infinity loop e chole jay tokhn never use hoy
//never execution ke thamiye dey and kichu return kore na
Object.defineProperty(exports, "__esModule", { value: true });
// function throwError(message:string):never{
//     throw new Error(message);
// }
// try{
//     throwError("404 Not found");
// }catch(error){
//     console.log("error caught in red hand:",error);
// }
function infinityLoop() {
    while (true) {
        console.log("Running...");
    }
}
// infinityLoop();
//void => function complete execute hoye kichu return kortese na but never mane function complete hbe na execution tai kichu return korbe na
function greet() {
    console.log("Hello");
}
greet();
